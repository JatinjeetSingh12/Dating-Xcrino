import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Bubble,
  GiftedChat,
  IMessage,
  InputToolbar,
  Send,
  SystemMessage,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, View } from "@gluestack-ui/themed";
import * as ImagePicker from "expo-image-picker";
import ChatScreenHeader from "@/components/chat/ChatScreenHeader";
import { Colors } from "@/constants/Colors";

const Page: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [text, setText] = useState("");
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
      {
        _id: 2,
        text: "Hi",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
        },
      },
    ]);
  }, []);


  const renderSystemMessage = useCallback((props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.primary,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}
      />
    );
  }, []);

  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {

      const imageMessage:IMessage = {
        _id:Math.random().toString().substring(7),
        createdAt:new Date(),
        image: result.assets[0].uri, 
        user:{
          _id:1
        },
        text:''
      }

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [imageMessage])
      );
    }
    
  };

  const onSend = useCallback((message: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, message)
    );
  }, []);

  const renderSend = (props: any) => (
    <View>
      {text.length > 0 ? (
        <Send {...props} containerStyle={styles.sendContainer}>
          <Ionicons name="send" size={24} color="black" />
        </Send>
      ) : (
        <Box
          p={12}
          justifyContent="center"
          alignItems="center"
          bg="$white"
          flexDirection="row"
          gap={20}
        >
          <Feather onPress={pickImage} name="camera" size={24} color="black" />
          <Feather name="mic" size={24} color="black" />
        </Box>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <ChatScreenHeader /> */}
      <GiftedChat
        messages={messages}
        onSend={onSend}
        renderAvatar={null}
        user={{ _id: 1 }}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={[
              styles.inputToolbar,
              { paddingBottom: !bottom ? 35 : bottom, paddingTop: 5 },
            ]}
          />
        )}
        onInputTextChanged={setText}
        textInputProps={styles.textInput}
        renderSend={renderSend}
        renderBubble={renderSystemMessage}
        renderChatFooter={() => <View h={50}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inputToolbar: {
    borderTopWidth: 0,
    // borderTopRightRadius: 40,
    // borderTopLeftRadius: 40,
  },

  textInput: {
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    marginTop: 15,
    borderColor: "silver",
    borderWidth: 1,
    minHeight: 40,
    paddingHorizontal: 10,
    textAlignVertical: "center",
    lineHeight: 22,
  },
  sendContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});

export default Page;

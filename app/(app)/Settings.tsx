import AppSettings from "@/components/settings/AppSettings";
import DiscoverySettings from "@/components/settings/DiscoverySettings";
import { Colors } from "@/constants/Colors";
import { APP_NAME, AUTH } from "@/constants/config";
import {
  Button,
  ButtonText,
  Divider,
  ScrollView,
  View,
  Text,
  Box,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";

const Settings = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View flex={1} backgroundColor={Colors.background}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoverySettings />
        <Divider h={3} my={10} />
        <AppSettings />
        <Box pb={bottom} my={20} gap={15}>
          <Button
            onPress={() => {
              SecureStore.deleteItemAsync(AUTH);
              router.navigate("/");
            }}
            w={"70%"}
            alignSelf="center"
            variant="outline"
            borderColor={Colors.primary}
          >
            <ButtonText color={Colors.primary}>SIGN OUT</ButtonText>
          </Button>
          <Text underline fontSize={12} fontFamily="Regular" textAlign="center">
            {APP_NAME} 1.0.0
          </Text>
        </Box>
      </ScrollView>
    </View>
  );
};

export default Settings;

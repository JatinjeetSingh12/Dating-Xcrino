import { TextInput } from "react-native";
import React, { FC } from "react";
import { View, Text } from "tamagui";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  Icon:any;
  label: string;
};

const Input: FC<Props> = ({ Icon, placeHolder, setValue, value,label }) => {
  return (
    <View my={12} gap={10}>
      <Text fontSize={12} color={'grey'}>{label}</Text>
      <View
        style={{
            alignItems:'center',
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "grey",
          paddingVertical: 10,
        }}
      >
        <TextInput

          placeholder={placeHolder}
          style={{ flex: 1, paddingLeft: 10, fontSize: 18 }}
        />
        {<Icon/>}
      </View>
    </View>
  );
};

export default Input;

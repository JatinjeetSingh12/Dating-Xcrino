import React from 'react';
import {useEffect, useRef, useState} from 'react';
import {HStack,Input} from '@gluestack-ui/themed';
import { TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  autoFocus: boolean;
  numberOfInput: number;
  onChangeText: (text: string) => void;
};

const OtpTextInput: React.FC<Props> = ({
  autoFocus = false,
  numberOfInput = 4,
  onChangeText,
}) => {
  const inputRef = useRef<any>([]);
  const [inputValue, setInputValue] = useState<string[]>(
    new Array(numberOfInput).fill(''),
  );

  useEffect(() => {
    onChangeText(inputValue.join(''));
  }, [inputValue]);

  return (
    <HStack mb={10} gap={4}  justifyContent="space-between">
      {Array.from(Array(numberOfInput).keys()).map((_, index) => {
        return (
          <TextInput
            key={index}
            autoFocus={index === 0 && autoFocus}
            ref={el => (inputRef.current[index] = el)}
            keyboardType="number-pad"
            style={{marginHorizontal:5, width: 50, height: 45, borderRadius: 10, borderBottomWidth: 1, alignItems: 'center', alignSelf: 'center', textAlign: 'center', fontSize: 20, borderColor:  'black'  }}
            onChangeText={(value: string) => {
              if (Number.isNaN(+value)) {
                return;
              }
              setInputValue(prev => {
                const state = [...prev];
                state[index] = value.replace(/[^0-9]/g, '');
                return state;
              });
              if (value.length && index + 1 < numberOfInput) {
                inputRef.current[index + 1].focus();
              }
            }}
            onKeyPress={({nativeEvent}:any) => {
              if (
                inputValue[index].length === 1 &&
                nativeEvent.key !== 'Backspace' &&
                index + 1 !== numberOfInput &&
                !Number.isNaN(+nativeEvent.key)
              ) {
                inputRef.current[index + 1].focus();
                setInputValue(prev => {
                  const state = [...prev];
                  state[index + 1] = nativeEvent.key.replace(/[^0-9]/g, '');
                  return state;
                });
              }

              if (nativeEvent.key === 'Backspace' && index !== 0) {
                inputRef.current[index - 1].focus();
                setInputValue(prev => {
                  const state = [...prev];
                  state.forEach((_item, i) => {
                    if (i > index) {
                      state[i] = '';
                    }
                  });
                  return state;
                });
              }
            }}
            value={inputValue[index]}
            blurOnSubmit={false}
            maxLength={1}
            textAlign="center"
          />
        );
      })}
    </HStack>
  );
};
export default OtpTextInput;

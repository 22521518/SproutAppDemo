import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import Icons from '@/constants/Icons';
import { colorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';

type FormFieldProps = {
  title: string;
  placeholder?: string;
  value: string;
  handChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};

export default function FormField({
  title,
  placeholder,
  value,
  handChangeText,
  otherStyles
}: FormFieldProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-accent-bg-light dark:text-accent-bg-dark font-semibold">
        {title}
      </Text>

      <View className="w-full h-16 px-4 rounded-md rounded-t-none rounded-e-none border-b-[2px]  border-accent-bg-opactity-50-light dark:border-accent-bg-opactity-50-dark flex-row items-center justify-between">
        <TextInput
          value={value}
          onChangeText={handChangeText}
          placeholderTextColor="#7B7B8B"
          className="flex-1 border-none text-secondary-white font-psemibold text-xl elevation-none relative opacity-100"
          style={{
            color: theme.accentColor,
            fontWeight: '600',
            outline: 'none'
          }}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {!value ? (
          <Text className="font-semibold text-xl absolute left-4 text-accent-bg-light dark:text-accent-bg-dark opacity-50 -z-50">
            {placeholder}
          </Text>
        ) : (
          <Icons.Cross width={64} height={64} fill={theme.accentColor} />
        )}
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icons.EyeHide fill={theme.accentColor} width={24} height={24} />
            ) : (
              <Icons.Eye fill={theme.accentColor} width={24} height={24} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

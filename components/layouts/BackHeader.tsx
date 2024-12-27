import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import Icons from '@/constants/Icons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { SvgProps } from 'react-native-svg';

const BackHeader = ({
  title,
  icon,
  children,
  disableBack
}: BackHeaderProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const IconComp = icon ? icon : Icons.Logo;

  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/friends');
  };

  return (
    <View className="height-[96px] py-4 w-full px-4 relative top-0 flex flex-row justify-between items-center">
      <View
        className={`h-16 bg-secondary-white rounded-full p-0.5 items-center flex flex-row gap-1 min-h-[10dvh] maxs-h-[10dvh] drop-shadow-xl ${
          disableBack && ' opacity-0 '
        }`}
      >
        <TouchableOpacity
          disabled={disableBack}
          className="w-max rounded-full  bg-secondary-white p-1 items-center justify-center flex"
          onPress={handleGoBack}
        >
          <View className="w-max rounded-full border-4 border-accent-bg-light dark:border-accent-bg-dark p-1 items-center justify-center flex">
            {colorScheme === 'dark' ? (
              <Icons.BackArrowDark width={36} height={36} />
            ) : (
              <Icons.BackArrowLight width={36} height={36} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      {children ? (
        children
      ) : (
        <Text className="text-2xl font-bold">{title}</Text>
      )}

      <View
        className={`h-16 bg-secondary-white rounded-full p-0.5 items-center flex flex-row gap-1 min-h-[10dvh] maxs-h-[10dvh] drop-shadow-xl ${
          icon && ' px-2 py-1 '
        }`}
      >
        <IconComp width={64} height={64} />
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({});

type BackHeaderProps = {
  title?: string;
  icon?: React.FC<SvgProps>;
  children?: React.ReactNode;
  disableBack?: boolean;
};

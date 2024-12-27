import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import Icons from '@/constants/Icons';
import { Colors } from '@/constants/Colors';

type TabHeaderProps = {
  title?: string;
};
const TabHeader = ({ title }: TabHeaderProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <View className="height-[96px] py-4 w-full px-4 relative top-0 flex flex-row justify-between items-center">
      <View
        className={`h-16 bg-secondary-white rounded-full p-0.5 items-center flex flex-row gap-1 min-h-[10dvh] maxs-h-[10dvh] drop-shadow-xl ${
          title && 'w-[72%] pe-5 '
        }`}
      >
        <Icons.Logo width={58} height={60} />
        {title && (
          <Text className=" flex-1 items-center content-center text-center font-bold text-2xl text-accent-button-light dark:text-accent-button-dark ">
            {title}
          </Text>
        )}
      </View>
      <View className="w-max rounded-full drop-shadow-xl shadow-black bg-secondary-white p-1 items-center justify-center flex">
        {colorScheme === 'dark' ? (
          <Icons.AchivementDark width={56} height={56} />
        ) : (
          <Icons.AchivementLight width={56} height={56} />
        )}
      </View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({});

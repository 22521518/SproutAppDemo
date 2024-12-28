import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/layouts/TabHeader';
import { GetToday } from '@/utils/time.utils';
import BackHeader from '@/components/layouts/BackHeader';
import { DummyTreesList } from '@/utils/dummy-data.utils';
import TreePartComponent from '@/components/trees/TreePart';
import { Colors } from '@/constants/Colors';
import { MonthDictions } from '@/constants/theme-dict.constant';

const Recording = () => {
  const colorScheme = useColorScheme();
  const theme: { [key: string]: string } =
    colorScheme === 'dark' ? Colors.dark : Colors.light;

  const today = GetToday();
  const month = new Date().getMonth();
  const date = today.split(' ')[1];
  const numDate = isNaN(Number(date)) ? 0 : Number(date);
  const level = (numDate % 4) + 1;
  const thisMonthTree = DummyTreesList()[month];
  const part = thisMonthTree.parts[level - 1];
  const lowerPart =
    part.level > 1 && thisMonthTree.parts.length > 1
      ? thisMonthTree.parts[part.level - 2]
      : undefined;

  const year = new Date().getFullYear();
  return (
    <SafeAreaView>
      <TabHeader title={today} />
      <View className="flex-1 mb-8 flex justify-center items-center px-5 pb-3 h-full">
        <View className="bg-secondary-white h-[80%] w-full rounded-[50px] flex flex-col items-center drop-shadow-lg  overflow-hidden">
          <Text
            className="text-2xl font-bold text-center"
            style={{
              color: theme.accentActionButton
            }}
          >
            {MonthDictions[month ?? 1]}
          </Text>
          <View className="grid grid-rows-2 grid-cols-1 gap-4 h-full w-full items-center justify-center place-content-center relative overflow-hidden pt-20">
            <TreePartComponent part={part} className="" width={75} />
            {lowerPart && (
              <TreePartComponent part={lowerPart} className="" width={90} />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

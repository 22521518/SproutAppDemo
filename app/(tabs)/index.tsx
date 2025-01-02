import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import { GetToday } from '@/utils/time.utils';
import TreePartComponent from '@/components/trees/TreePart';
import { Colors } from '@/constants/Colors';
import { MonthDictions } from '@/constants/dictionary.constant';
import { dummyTree2k } from '@/data/dummy-data.constant';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const Recording = () => {
  const colorScheme = useColorScheme();
  const theme: { [key: string]: string } =
    colorScheme === 'dark' ? Colors.dark : Colors.light;

  const today = GetToday();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = today.split(' ')[1];
  const numDate = isNaN(Number(date)) ? 0 : Number(date);
  const level = Math.floor(Number(numDate / 7)) + 1;

  const thisMonthTree = dummyTree2k[year - 2000][month];
  const part = thisMonthTree.parts[level - 1];
  const lowerPart =
    part.level > 1 && thisMonthTree.parts.length > 1
      ? thisMonthTree.parts[part.level - 2]
      : undefined;

  return (
    <CustomSafeAreaView className="">
      <TabHeader title={today} />
      <View className="mb-8 flex justify-center items-center px-5 pb-3 h-[80%]">
        <View className="bg-secondary-white h-[80%] w-full rounded-[50px] flex flex-col drop-shadow-lg overflow-hidden">
          <Text
            className="text-2xl font-bold text-center mb-8"
            style={{
              color: theme.accentActionButton
            }}
          >
            {MonthDictions[Number(month)]}
          </Text>
          <View className="flex flex-col gap-10 h-full w-full relative overflow-hidden items-center justify-evenly">
            <View className="w-full h-3/5 relative">
              <TreePartComponent
                part={part}
                width={100}
                fruitSize={32}
                handlePress={() => {}}
              />
            </View>
            {lowerPart && (
              <View className="w-[120%] h-2/5 relative">
                <TreePartComponent
                  part={lowerPart}
                  width={100}
                  fruitSize={32}
                  disabled
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

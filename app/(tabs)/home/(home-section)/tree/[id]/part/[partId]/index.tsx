import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import BackHeader from '@/components/layouts/BackHeader';
import { Colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import { getTree } from '@/utils/data.utils';
import { DummyTreesList } from '@/utils/dummy-data.utils';
import {
  ColorTreeTypeMap,
  MonthDictions
} from '@/constants/dictionary.constant';
import { TreeColorTypeEnum } from '@/models/enum.model';
import TreePartComponent from '@/components/trees/TreePart';

const TreePart = () => {
  const colorScheme = useColorScheme();
  const theme: { [key: string]: string } =
    colorScheme === 'dark' ? Colors.dark : Colors.light;

  const { id, partId } = useLocalSearchParams();
  const tree = getTree(id as string) ?? DummyTreesList()[0];
  const treeParts = tree?.parts ?? DummyTreesList()[0].parts;
  const part =
    treeParts
      .sort((a, b) => a.level - b.level)
      .find((part) => part.id === partId) ?? DummyTreesList()[0].parts[0];

  const lowerPart =
    part.level > 1 && treeParts.length > 1
      ? treeParts[part.level - 2]
      : undefined;

  const year = tree.year ?? new Date().getFullYear();
  const month = tree.month ?? new Date().getMonth();

  const color =
    theme[
      ColorTreeTypeMap[
        (tree?.color as keyof typeof ColorTreeTypeMap) ??
          TreeColorTypeEnum.SPRING24
      ] as keyof typeof theme
    ];

  const handleGoBack = () => {
    router.replace(`/home/tree/${id}`);
  };
  return (
    <View className="flex flex-col flex-1">
      <BackHeader title={year.toString()} handleGoBack={handleGoBack} />
      <View className="flex-1 mb-8 flex justify-center items-center px-5 pb-3 h-full">
        <View className="bg-secondary-white h-[80%] w-full rounded-[50px] flex flex-col drop-shadow-lg overflow-hidden">
          <Text
            className="text-2xl font-bold text-center mb-8"
            style={{
              color: color
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
                handlePress={() => {
                  console.log('part', part);
                }}
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
    </View>
  );
};

export default TreePart;

const styles = StyleSheet.create({});

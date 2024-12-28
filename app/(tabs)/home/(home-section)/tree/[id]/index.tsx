import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import BackHeader from '@/components/layouts/BackHeader';
import { getTree } from '@/utils/data.utils';
import { Colors } from '@/constants/Colors';
import {
  ColorTreeTypeMap,
  MonthDictions
} from '@/constants/theme-dict.constant';
import { TreeColorTypeEnum, TreeTypeEnum } from '@/constants/enum.constant';
import { DummyTreePart, DummyTreesList } from '@/utils/dummy-data.utils';
import TreePartComponent from '@/components/trees/TreePart';

const TreeHome = () => {
  const colorScheme = useColorScheme();
  const theme: { [key: string]: string } =
    colorScheme === 'dark' ? Colors.dark : Colors.light;

  const { id } = useLocalSearchParams();
  const tree = getTree(id as string) ?? DummyTreesList()[0];
  const color =
    theme[
      ColorTreeTypeMap[
        (tree?.color as keyof typeof ColorTreeTypeMap) ??
          TreeColorTypeEnum.SPRING24
      ] as keyof typeof theme
    ];
  const year = tree?.year ?? new Date().getFullYear();
  const partList =
    tree?.parts.length <= 0
      ? [1, 2].map((i) => DummyTreePart(i, 1, 1))
      : tree?.parts;
  const sortedPartList = React.useMemo(
    () => partList.sort((a, b) => a.level - b.level),
    [partList]
  );

  const handleGoBack = () => {
    router.replace(`/home/${year}`);
  };

  const handlePressOnPart = (partId: string) => {
    console.log(
      'partId',
      partList.find((p) => p.id === partId)
    );
    router.push(`/home/tree/${id}/part/${partId}`);
  };

  return (
    <SafeAreaView className="flex flex-col flex-1">
      <BackHeader title={`${year}`} handleGoBack={handleGoBack} />
      <View className="flex-1 mb-8 flex justify-center items-center px-5 pb-3 h-full">
        <View className="bg-secondary-white h-full w-full rounded-[50px] px-10 flex flex-col items-center drop-shadow-lg overflow-hidden">
          <Text
            className="text-2xl font-bold text-center"
            style={{
              color: color
            }}
          >
            {MonthDictions[tree?.month ?? 1]}
          </Text>
          <View className="relative h-full w-full max-h-[80%] grid grid-cols-15 gap-2">
            {[3, 2, 1, 0].map((i) => {
              const increaseWidth = [50, 33, 13, 0];
              const part = sortedPartList[i];
              return part ? (
                <TreePartComponent
                  handlePress={() => handlePressOnPart(part.id)}
                  key={i}
                  part={part}
                  className={` relative ${
                    i <= 1 && sortedPartList.length == 4
                      ? i == 0
                        ? ' -bottom-14 '
                        : '-bottom-3'
                      : i <= 1 && sortedPartList.length != 4
                      ? i == 1
                        ? ' bottom-3 '
                        : ' -bottom-5 '
                      : ' bottom-0 '
                  } `}
                />
              ) : (
                <View
                  key={i}
                  className=" mx-auto relative bottom-0"
                  style={{
                    gridRowStart: `span ${Math.max(5 - i, 2)}`,
                    width: `${50 + increaseWidth[i]}%`,
                    height: `100%`
                  }}
                ></View>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TreeHome;

const styles = StyleSheet.create({});

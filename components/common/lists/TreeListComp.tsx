import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { tree24 } from '@/constants/dummy-data.constant';
import TreeButton from '../buttons/TreeButton';
import { router } from 'expo-router';

const TreeListComp = ({ year }: TreeListCompProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const treeList = tree24.filter((tree) => tree.year == year);
  const springTree = treeList.filter((tree) => tree.month < 4);
  const summerTree = treeList.filter(
    (tree) => tree.month < 7 && tree.month > 3
  );
  const fallTree = treeList.filter((tree) => tree.month < 10 && tree.month > 6);
  const winterTree = treeList.filter(
    (tree) => tree.month < 13 && tree.month > 9
  );

  const handleTreePress = (id: string) => {
    router.push(`/home/tree/${id}`);
  };

  return (
    <View className="flex flex-col items-center h-full w-[90%] mx-auto">
      <Text
        className="text-center text-2xl font-bold"
        style={{ color: theme.accentActionButton }}
      >
        Today is {year}
      </Text>
      <View className="grid grid-rows-4 gap-1 pb-6 w-full h-[90%] my-auto relative">
        {/* SPRING - 1 */}
        <View className="top-[-1px] w-[85%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -left-4">
          <View className="border-b-4 border-solid border-black h-[100%] w-[120%] absolute flex flex-row justify-start items-end left-0 ps-9">
            <View className="w-max grid grid-cols-3 gap-8 items-end relative">
              {springTree.map((tr, i) => (
                <TreeButton
                  key={tr.id}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* SUMMER - 2 */}
        <View className="-mt-[9px] w-[85%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -right-6 ">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] rounded-full absolute flex flex-row justify-end items-end right-0 pe-9">
            <View className="w-max grid grid-cols-3 gap-8 items-end relative">
              {summerTree.map((tr, i) => (
                <TreeButton
                  key={tr.id}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* FALL - 3 */}
        <View className="-mt-[9px] w-[85%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -left-4">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] rounded-full absolute flex flex-row justify-start items-end left-0 ps-9">
            <View className="w-max grid grid-cols-3 gap-8 items-end relative">
              {fallTree.map((tr, i) => (
                <TreeButton
                  key={tr.id}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* WINTER - 4 */}
        <View className="-mt-[9px] w-[85%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -right-6">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] rounded-full absolute flex flex-row justify-end items-end right-0 pe-9">
            <View className="w-max grid grid-cols-3 gap-8 items-end relative">
              {winterTree.map((tr, i) => (
                <TreeButton
                  key={tr.id}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TreeListComp;

const styles = StyleSheet.create({});

type TreeListCompProps = {
  year: number | string;
};

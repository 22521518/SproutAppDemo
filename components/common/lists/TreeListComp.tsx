import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { dummyTree2k } from '@/data/dummy-data.constant';
import TreeButton from '../buttons/TreeButton';
import { router } from 'expo-router';

const TreeListComp = ({ year }: TreeListCompProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [treeList, setTreeList] = React.useState(
    dummyTree2k[Number(year) - 2000 ? Number(year) - 2000 : 0]
  );
  const springTree = React.useMemo(
    () => treeList.filter((tree) => tree.month < 4),
    [treeList]
  );
  const summerTree = React.useMemo(
    () => treeList.filter((tree) => tree.month < 7 && tree.month > 3),
    [treeList]
  );
  const fallTree = React.useMemo(
    () => treeList.filter((tree) => tree.month < 10 && tree.month > 6),
    [treeList]
  );
  const winterTree = React.useMemo(
    () => treeList.filter((tree) => tree.month > 9),
    [treeList]
  );

  const handleTreePress = (id: string) => {
    router.push(`/home/tree/${id}`);
  };

  React.useEffect(() => {
    setTreeList(dummyTree2k[Number(year) - 2000 ? Number(year) - 2000 : 0]);
  }, [year]);

  return (
    <View className="flex flex-col items-center h-full w-[90%] mx-auto">
      <Text
        className="text-center text-2xl font-bold"
        style={{ color: theme.accentActionButton }}
      >
        Today is {year}
      </Text>
      <View className="flex flex-col mt-2 pt-2 pb-6 w-full h-[90%] relative">
        {/* SPRING - 1 */}
        <View className="mt-2 h-[25%] w-[90%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -left-4">
          <View className="border-solid border-black flex flex-row justify-start items-end ps-10">
            <View className="w-max flex flex-row-reverse gap-8 items-end relative">
              {springTree.map((tr, i) => (
                <TreeButton
                  key={i}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* SUMMER - 2 */}
        <View className=" h-[25%] w-[90%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -right-6 ">
          <View className="h-[100%] w-[102%] absolute bottom-0 right-0 border-4 border-solid border-black rounded-r-full flex flex-row justify-end items-end pe-10">
            <View className="w-max flex flex-row-reverse gap-8 items-end relative">
              {summerTree.map((tr, i) => (
                <TreeButton
                  key={i}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* FALL - 3 */}
        <View className="-mt-[4px] h-[25%] w-[90%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -left-4">
          <View className="h-[106%] w-[102%] absolute bottom-0 -left-0 border-4 border-r-0  border-solid border-black rounded-l-full flex flex-row justify-start items-end ps-10">
            <View className="w-max flex flex-row-reverse gap-8 items-end relative">
              {fallTree.map((tr, i) => (
                <TreeButton
                  key={i}
                  tree={tr}
                  handPress={() => handleTreePress(tr.id)}
                />
              ))}
            </View>
          </View>
        </View>

        {/* WINTER - 4 */}
        <View className="-mt-[4px] h-[25%] w-[90%] mx-auto overflow-hidden relative flex flex-row justify-center items-center -right-6">
          <View className="h-[102%] w-[102%] absolute bottom-0 right-0 border-4 border-solid border-black rounded-r-full flex flex-row justify-end items-end pe-10">
            <View className="w-max flex flex-row-reverse gap-8 items-end relative">
              {winterTree.map((tr, i) => (
                <TreeButton
                  key={i}
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

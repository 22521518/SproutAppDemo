import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import TreeIcons from '@/constants/TreeIcons';

const TreeListComp = ({ year }: TreeListCompProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <View className="flex flex-col items-center h-full w-[90%]">
      <Text
        className="text-center text-2xl font-bold"
        style={{ color: theme.accentActionButton }}
      >
        Today is {year}
      </Text>
      <View className="grid grid-rows-4 gap-1 pb-6 w-full h-[90%] my-auto relative content-center">
        <View className="-mt-[9px] w-[80%] overflow-hidden relative top-0 left-6">
          <View className="border-b-4 border-solid border-black h-[120%] w-[120%] bottom-0 -left-10 absolute flex flex-row items-end justify-end gap-8 pe-5">
            {[1, 2, 3].map((_, i) => (
              <TouchableOpacity>
                <TreeIcons.TriangleTree
                  width={56}
                  height={81}
                  key={i}
                  fill={theme['spring-tree']}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="-mt-[9px] w-[123%] overflow-hidden relative top-0 -right-11">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] bottom-0 right-28 absolute rounded-full flex flex-row items-end justify-end gap-8 pe-12">
            {[1, 2, 3].map((_, i) => (
              <TouchableOpacity>
                <TreeIcons.SquareTree
                  width={56}
                  height={81}
                  key={i}
                  fill={theme['summer-tree']}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="-mt-2 w-[85%] overflow-hidden relative top-0 left-0">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] bottom-0 left-0 rounded-full absolute flex flex-row items-end justify-start gap-8 ps-7">
            {[1, 2, 3].map((_, i) => (
              <TouchableOpacity>
                <TreeIcons.SemiCircleTree
                  width={56}
                  height={81}
                  key={i}
                  fill={theme['fall-tree']}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="-mt-[9px] w-[123%] overflow-hidden relative top-0 -right-11">
          <View className="border-4 border-solid border-black h-[100%] w-[120%] bottom-0 right-28 absolute rounded-full flex flex-row items-end justify-end gap-8 pe-12">
            {[1, 2, 3].map((_, i) => (
              <TouchableOpacity>
                <TreeIcons.CircleTree
                  width={56}
                  height={81}
                  key={i}
                  fill={theme['winter-tree']}
                />
              </TouchableOpacity>
            ))}
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

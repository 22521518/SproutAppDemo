import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { TreePartType } from '@/constants/type.constant';
import {
  ColorTreeTypeMap,
  FillFruitTypeMap,
  TreeTypeSvgMap
} from '@/constants/theme-dict.constant';
import { Colors } from '@/constants/Colors';
import TreePartIcons from '../icons/TreePartIcons';

const TreePartComponent = ({
  part,
  className,
  handlePress,
  width
}: TreePartProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const increaseWidth = [50, 33, 13, 0];
  const level = part.level;
  const type = part.type;
  const fruitList = part.fruit;

  const fruitFirstRow = fruitList.slice(0, 7);
  const fruitSecondRow = fruitList.slice(7, 13);
  const fruitThirdRow = fruitList.slice(13, 20);

  const validLevels = ['lv1', 'lv2', 'lv3', 'lv4'] as const;
  const levelKey = `lv${level}` as (typeof validLevels)[number];
  if (!validLevels.includes(levelKey)) {
    throw new Error(`Invalid level: ${level}`);
  }
  const BackgroundTreePart = TreeTypeSvgMap[type]?.[levelKey];
  const redFlag2 = BackgroundTreePart === TreePartIcons.Square.Lv2;
  const redFlag1 = BackgroundTreePart === TreePartIcons.Square.Lv1;
  const color = theme[ColorTreeTypeMap[part.color] as keyof typeof theme];

  return (
    <View
      className={`mx-auto relative w-full h-full max-h-full flex justify-center items-center ${
        redFlag2 ? '-bottom-14' : ' '
      } ${redFlag1 ? '-bottom-20' : ' '}  ${className}`}
      style={{
        gridRowStart: `span ${
          width ? 1 : part.level > 3 ? 2 : part.level > 2 ? 3 : 4
        }`,
        width: `${width ? width : 50 + increaseWidth[part.level - 1]}%`
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        className=" relative w-full h-full items-center justify-center"
      >
        <BackgroundTreePart
          width="100%"
          height="100%"
          fill={color ?? 'black'}
          className="absolute h-max w-full top-0 items-center justify-center"
        />
        <View className="grid grid-rows-3 max-h-full mb-2">
          <View className="grid grid-cols-5 w-[50%] mx-auto">
            {fruitThirdRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return <IconFComp width={24} height={24} />;
            })}
          </View>
          <View className="grid grid-cols-6 w-[80%] mx-auto">
            {fruitSecondRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return <IconFComp width={24} height={24} />;
            })}
          </View>
          <View className="grid grid-cols-7 items-end">
            {fruitFirstRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return <IconFComp width={24} height={24} />;
            })}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TreePartComponent;

const styles = StyleSheet.create({});

type TreePartProps = {
  part: TreePartType;
  className?: string;
  width?: number;
  handlePress?: () => void;
};

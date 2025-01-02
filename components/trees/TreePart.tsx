import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { TreePartType } from '@/models/type.model';
import {
  ColorTreeTypeMap,
  FillFruitTypeMap,
  TreeTypeSvgMap
} from '@/constants/dictionary.constant';
import { Colors } from '@/constants/Colors';

const TreePartComponent = ({
  part,
  fruitSize = 16,
  className,
  handlePress,
  width,
  disabled
}: TreePartProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const increaseWidth = [50, 33, 13, 0];
  const increaseHeight = [50, 40, 30, 20];
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
  const color = theme[ColorTreeTypeMap[part.color] as keyof typeof theme];

  return (
    <View
      className={`mx-auto relative flex justify-center items-center ${className}`}
      style={{
        width: `${width ? width : 50 + increaseWidth[part.level - 1]}%`,
        height: width ? '120%' : `${increaseHeight[part.level - 1]}%`
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        disabled={disabled}
        style={styles.backgroundTreePart}
      >
        <BackgroundTreePart
          width={'100%'}
          fill={color ?? 'black'}
          style={{
            position: 'absolute',
            top: 0,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        <View style={styles.fruitContainer}>
          <View className="flex flex-row gap-1 items-center justify-evenly w-[60%] mx-auto">
            {fruitThirdRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return (
                <View className="w-[18%]" key={index}>
                  <IconFComp width={fruitSize} height={fruitSize} />
                </View>
              );
            })}
          </View>
          <View className="flex flex-row gap-1 items-center justify-evenly w-[80%] mx-auto">
            {fruitSecondRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return (
                <View className="w-[15%]" key={index}>
                  <IconFComp width={fruitSize} height={fruitSize} />
                </View>
              );
            })}
          </View>
          <View className="flex flex-row gap-1 items-center justify-evenly">
            {fruitFirstRow.map((fruit, index) => {
              const IconFComp = FillFruitTypeMap[fruit.type];
              return (
                <View className="w-[12%]" key={index}>
                  <IconFComp width={fruitSize} height={fruitSize} />
                </View>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TreePartComponent;

const styles = StyleSheet.create({
  backgroundTreePart: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fruitContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    marginBottom: 2
  }
});

type TreePartProps = {
  part: TreePartType;
  fruitSize?: number;
  className?: string;
  width?: number;
  handlePress?: () => void;
  disabled?: boolean;
};

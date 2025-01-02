import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { TreeType } from '@/models/type.model';
import { Colors } from '@/constants/Colors';
import {
  TreeIconsTypeMap,
  ColorIconTypeMap
} from '@/constants/dictionary.constant';

const TreeButton = ({ tree, handPress }: TreeButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const IconComp = TreeIconsTypeMap[tree.type];
  const color = theme[ColorIconTypeMap[tree.color] as keyof typeof theme];

  return (
    <TouchableOpacity onPress={handPress}>
      <IconComp width={56} height={81} fill={color} />
    </TouchableOpacity>
  );
};

export default TreeButton;

const styles = StyleSheet.create({});

type TreeButtonProps = {
  tree: TreeType;
  handPress: () => void;
};

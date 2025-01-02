import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FruitType } from '@/models/type.model';
import { OutlineFruitTypeMap } from '@/constants/dictionary.constant';

const FruitPaternIcon = ({ fruit }: FruitPaternIconProps) => {
  const FruitIconComp = OutlineFruitTypeMap[fruit.type];
  return (
    <View className="w-full h-full flex justify-center items-center relative">
      <FruitIconComp width={200} height={210} className="absolute top-2" />
    </View>
  );
};

export default FruitPaternIcon;

const styles = StyleSheet.create({});

type FruitPaternIconProps = {
  fruit: FruitType;
};

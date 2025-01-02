import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { EmotionType } from '@/models/type.model';
import { EmotionTypeEnum } from '@/models/enum.model';
import {
  EmotionTypeColorMap,
  EmotionTypeSvgMap
} from '@/constants/dictionary.constant';
import { Colors } from '@/constants/Colors';

const MAX_LEVEL = 4;

const Emotion = ({ emotion }: EmotionProps) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const lv = Math.floor(emotion.indicators / MAX_LEVEL) > 1 ? 2 : 0;
  const IconComp = EmotionTypeSvgMap(emotion.type, lv);
  const textColor = EmotionTypeColorMap(emotion.type, color);

  return (
    <View className="flex flex-col items-center gap-1">
      <IconComp />
      <Text
        className="font-bold"
        style={{
          color: textColor
        }}
      >
        lv.{lv}
      </Text>
    </View>
  );
};

export default Emotion;

const styles = StyleSheet.create({});

type EmotionProps = {
  emotion: EmotionType;
};

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Emotion from '../decorations/Emotion';
import { EmotionType } from '@/models/type.model';
import { EmotionTypeEnum } from '@/models/enum.model';
import { EmotionsGroup } from '@/models/interface.model';

const RecordingContent = ({ emotionData }: RecordingContentProps) => {
  const [emotions, setEmotions] = React.useState<EmotionsGroup>({
    happyEmotion: {
      type: EmotionTypeEnum.HAPPY,
      indicators: 0
    },
    sadEmotion: {
      type: EmotionTypeEnum.SAD,
      indicators: 0
    },
    angryEmotion: {
      type: EmotionTypeEnum.ANGRY,
      indicators: 0
    },
    neutralEmotion: {
      type: EmotionTypeEnum.NEUTRAL,
      indicators: 0
    },
    fearEmotion: {
      type: EmotionTypeEnum.FEARFUL,
      indicators: 0
    },
    disgustedEmotion: {
      type: EmotionTypeEnum.DISGUSTED,
      indicators: 0
    }
  });

  React.useEffect(() => {
    setEmotions((prev) => {
      const newEmotions = { ...prev };
      Object.keys(emotionData).forEach((key) => {
        newEmotions[key as keyof EmotionsGroup].indicators =
          newEmotions[key as keyof EmotionsGroup].indicators +
            emotionData[key as keyof EmotionsGroup].indicators >
          100
            ? 100
            : newEmotions[key as keyof EmotionsGroup].indicators +
              emotionData[key as keyof EmotionsGroup].indicators;
      });
      return newEmotions;
    });
  }, [emotionData]);

  return (
    <View className="bg-secondary-white h-full w-full rounded-[50px] flex flex-col drop-shadow-lg overflow-hidden px-4 py-3 gap-1">
      <View className="w-full h-2/5 px-8 flex flex-row justify-between items-center">
        <Emotion emotion={emotions.happyEmotion} />
        <Emotion emotion={emotions.angryEmotion} />
        <Emotion emotion={emotions.sadEmotion} />
      </View>
      <View className="flex-grow bg-red-200 w-full">
        <Text>Calling</Text>
      </View>
      <View className="w-full h-2/5 px-8 flex flex-row justify-between items-center">
        <Emotion emotion={emotions.fearEmotion} />
        <Emotion emotion={emotions.disgustedEmotion} />
        <Emotion emotion={emotions.neutralEmotion} />
      </View>
    </View>
  );
};

export default RecordingContent;

const styles = StyleSheet.create({});

type RecordingContentProps = {
  emotionData: EmotionsGroup;
};

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Emotion from '../decorations/Emotion';
import { EmotionType } from '@/models/type.model';
import { EmotionTypeEnum } from '@/models/enum.model';
import { EmotionsGroup } from '@/models/interface.model';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated';

const RecordingContent = ({
  emotionData,
  audioMeteringChunks
}: RecordingContentProps) => {
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
      <View className="flex-grow w-full items-center flex flex-row gap-1 relative">
        {audioMeteringChunks.map((db, index) => {
          return (
            <View
              key={index}
              style={[
                styles.waveLine,
                {
                  height: interpolate(
                    db,
                    [-60, 0],
                    [5, 80],
                    Extrapolation.CLAMP
                  )
                }
              ]}
            />
          );
        })}
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

const styles = StyleSheet.create({
  waves: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center'
  },
  waveLine: {
    flex: 1,
    borderRadius: 990,
    backgroundColor: '#ff000055'
  },
  textWave: {
    width: 60,
    height: 60,
    textAlign: 'center'
    // backgroundColor: '#ff00ff55'
  },
  recordingWaves: {
    backgroundColor: '#ff000055',
    display: 'flex',
    alignContent: 'center',
    zIndex: -999,
    borderRadius: 999,
    ...StyleSheet.absoluteFillObject,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

type RecordingContentProps = {
  emotionData: EmotionsGroup;
  audioMeteringChunks: number[];
};

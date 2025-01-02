import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useMemo } from 'react';
import { Colors } from '@/constants/Colors';
import { formatTime } from '@/utils/time.utils';
import IconButton from '../common/buttons/IconButton';
import Icons from '@/components/icons/Icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { SvgProps } from 'react-native-svg';
import PlayPauseButton from '../common/buttons/PlayPaseButton';
import RecordingContent from './RecordingContent';
import { EmotionTypeEnum } from '@/models/enum.model';
import { EmotionsGroup } from '@/models/interface.model';
import { extractAudioAnalysis } from '@/utils/dummy-extract-audio';
import { DummyFruit } from '@/utils/dummy-data.utils';
import { dummyFearFruit } from '@/data/dummy-data.constant';

const maxDuration = 500 * 1000 + 99;

const RecordingComp = ({
  onEndCall,
  icon,
  pausable,
  onPaused,
  onPlay
}: RecordingCompProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const IconComp = icon ? icon : Icons.EndCall;
  const [emotionData, setEmotionData] = React.useState<EmotionsGroup>({
    happyEmotion: { type: EmotionTypeEnum.HAPPY, indicators: 0 },
    sadEmotion: { type: EmotionTypeEnum.SAD, indicators: 0 },
    angryEmotion: { type: EmotionTypeEnum.ANGRY, indicators: 0 },
    neutralEmotion: { type: EmotionTypeEnum.NEUTRAL, indicators: 0 },
    fearEmotion: { type: EmotionTypeEnum.FEARFUL, indicators: 0 },
    disgustedEmotion: { type: EmotionTypeEnum.DISGUSTED, indicators: 0 }
  });

  const [countDown, setCountDown] = React.useState<number>(maxDuration);
  const [isPaused, setIsPaused] = React.useState(false);
  const [recording, setRecording] = React.useState(true);
  let intervalId: NodeJS.Timeout | null = null;

  const updateEmotionData = (newIndicators: EmotionsGroup) => {
    setEmotionData((prev) => ({
      ...prev,
      ...newIndicators // Merge new indicator values
    }));
  };

  const handleStartRecording = async () => {
    // const { status } = await Audio.requestPermissionsAsync();
    // if (status !== 'granted') {
    //   alert('Permission to access microphone is required!');
    //   return;
    // }

    // Start recording
    // const { recording } = await Audio.Recording.createAsync(
    //   Audio.RecordingOptionsPresets.HIGH_QUALITY
    // );
    // setRecording(recording);
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      setCountDown((prevTime) => prevTime - 1);
      // Every 10 seconds, extract audio chunk
      if (Math.floor(countDown) % 10 === 0) {
        extractAudioChunk();
      }
    }, 1000);
  };

  const handleEndCall = () => {
    if (maxDuration - countDown < 0.2) return;
    intervalId && clearInterval(intervalId);
    intervalId = null;
    const dummyFruit = dummyFearFruit;
    onEndCall(dummyFruit.id);
  };

  const handlePause = () => {
    if (countDown <= maxDuration) return;
    intervalId && clearInterval(intervalId);
    intervalId = null;
    setIsPaused(true);
    onPaused && onPaused();
  };

  const handlePlay = () => {
    if (intervalId) clearInterval(intervalId);
    setIsPaused(false);
    onPlay && onPlay();
    // Restart interval to continue extracting audio chunks
    intervalId = setInterval(() => {
      setCountDown((prevTime) => prevTime - 1);
      if (Math.floor(countDown) % 10 === 0) {
        extractAudioChunk();
      }
    }, 1000);
  };

  const extractAudioChunk = async () => {
    if (recording) {
      // const uri = await recording.getURI();
      console.log(`Extracting chunk at ${countDown}s from recording`);
      // Here, you would process or analyze the chunk (e.g., send to server)

      // Example usage to update specific emotions
      updateEmotionData(extractAudioAnalysis());
    }
  };

  React.useEffect(() => {
    handleStartRecording();
  });

  React.useEffect(() => {
    if (countDown <= 0) {
      intervalId && clearInterval(intervalId);
      intervalId = null;
      const dummyFruit = DummyFruit();
      onEndCall(dummyFruit.id);
    }

    return () => {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    };
  }, [countDown]);

  return (
    <View className="flex items-center relative flex-1">
      <View className="flex-1 w-full px-2 py-8 ">
        <RecordingContent emotionData={emotionData} />
      </View>
      <View className="h-[120px] w-full flex items-center mb-7 gap-3 relative">
        <Text
          className="font-extrabold text-lg"
          style={{
            color: theme.accentActionButton
          }}
        >
          {formatTime(Math.floor(countDown))}
        </Text>

        <CountdownCircleTimer
          isPlaying={!isPaused}
          duration={maxDuration}
          size={96}
          strokeWidth={16}
          colors={[
            theme.accentActionButton as `#${string}`,
            '#F7B801',
            '#A30000',
            '#A30000'
          ]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
          updateInterval={1}
        >
          {() => (
            <IconButton
              handlePress={handleEndCall}
              fill
              icon={() => <IconComp fill={theme.accentActionButton} />}
              size={74}
            />
          )}
        </CountdownCircleTimer>
        {pausable && (
          <View className="absolute bottom-0 right-9">
            <PlayPauseButton
              handlePause={handlePause}
              handlePlay={handlePlay}
              isPaused={isPaused}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default RecordingComp;

const styles = StyleSheet.create({});

type RecordingCompProps = {
  onEndCall: (fruitId: string) => void;
  onPaused?: () => void;
  onPlay?: () => void;
  icon?: React.FC<SvgProps>;
  pausable?: boolean;
};

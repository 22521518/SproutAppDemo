import { Platform, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
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
import { dummyFearFruit } from '@/data/dummy-data.constant';
import { Audio } from 'expo-av';
import { Recording } from 'expo-av/build/Audio';
import { useSharedValue } from 'react-native-reanimated';

const maxDurationBySeconds = 500 * 90;
const intervalLength = 100;
const chunkLengthBySecond = 10; //seconds
const chunkLength = chunkLengthBySecond * Math.floor(1000 / intervalLength);
const maxDuration =
  maxDurationBySeconds * Math.floor(1000 / intervalLength) + intervalLength - 1; // this avoid the first chunk to be extracted twice
const minDP = -160;
const maxDP = 0;
const lineNumber = 20;
const initEmotion: EmotionsGroup = {
  happyEmotion: { type: EmotionTypeEnum.HAPPY, indicators: 0 },
  sadEmotion: { type: EmotionTypeEnum.SAD, indicators: 0 },
  angryEmotion: { type: EmotionTypeEnum.ANGRY, indicators: 0 },
  neutralEmotion: { type: EmotionTypeEnum.NEUTRAL, indicators: 0 },
  fearEmotion: { type: EmotionTypeEnum.FEARFUL, indicators: 0 },
  disgustedEmotion: { type: EmotionTypeEnum.DISGUSTED, indicators: 0 }
};

const RecordingComp = ({
  onStopRecording,
  icon,
  pausable,
  onPaused,
  onPlay
}: RecordingCompProps) => {
  // DUMMY
  const [dummyMemos, setDummyMemos] = React.useState<string[]>([]);
  // DUMMY

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const IconComp = icon ? icon : Icons.EndCall;
  const [emotionData, setEmotionData] =
    React.useState<EmotionsGroup>(initEmotion);

  const [countDown, setCountDown] = React.useState<number>(maxDuration);
  const [isPaused, setIsPaused] = React.useState(false);
  const [recordingState, setRecordingState] = React.useState<Recording>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const [audioMeteringChunks, setAudioMeteringChunks] = React.useState<
    number[]
  >(Array(lineNumber).fill(minDP));

  const updateEmotionData = (newIndicators: EmotionsGroup) => {
    setEmotionData((prev) => ({
      ...prev,
      ...newIndicators // Merge new indicator values
    }));
  };

  const enableRecording = async () => {
    if (Platform.OS === 'web') return;
    try {
      if (permissionResponse?.status !== 'granted') {
        await requestPermission();
      }

      if (recordingState) {
        await recordingState.stopAndUnloadAsync();
        setRecordingState(undefined);
        await Audio.setAudioModeAsync({ allowsRecordingIOS: false });
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
        undefined,
        50
      );
      setRecordingState(recording);

      recording.setOnRecordingStatusUpdate((status) => {
        if (status.metering) {
          setAudioMeteringChunks((prev) => {
            if (prev.length >= lineNumber) {
              prev.shift();
            }
            return [...prev, status.metering ?? minDP];
            return [...prev, -Math.floor(Math.random() * 160)];
          });
        }
      });
    } catch (err) {
      console.error('Failed to enable recording:', err);
    }
  };

  const handleStartRecording = async () => {
    try {
      if (Platform.OS !== 'web') {
        await enableRecording();
      }
      intervalRef.current = setInterval(() => {
        setCountDown((prev) => {
          const newCount = prev - 1;
          if (newCount % chunkLength === 0) extractAudioChunk();
          return newCount;
        });
      }, intervalLength);
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  };

  const safeStopRecording = async () => {
    try {
      if (Platform.OS !== 'web')
        if (recordingState) {
          await recordingState.stopAndUnloadAsync();
          await Audio.setAudioModeAsync({ allowsRecordingIOS: false });
          const uri = recordingState.getURI();
          console.log('Recording stored at', uri);
        }
    } catch (err) {
      console.error('Error during safe stop:', err);
    } finally {
      setRecordingState(undefined);
    }
  };

  const handleStopRecording = async () => {
    // Prevent stopping recording if it's not started (or double click)
    if (countDown >= maxDuration - 1) return;

    try {
      await safeStopRecording();
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCountDown(maxDuration);
      onStopRecording(dummyFearFruit.id);
    } catch (err) {
      console.error('Failed to stop recording:', err);
    }
  };

  const handlePause = () => {
    if (countDown <= maxDuration) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPaused(true);
    onPaused && onPaused();
  };

  const handlePlay = () => {
    setIsPaused(false);
    onPlay && onPlay();
    intervalRef.current = setInterval(() => {
      setCountDown((prev) => {
        const newCount = prev - 1;
        if (newCount % chunkLength === 0) extractAudioChunk();
        return newCount;
      });
    }, intervalLength);
  };

  const extractAudioChunk = () => {
    if (recordingState) {
      if (Platform.OS !== 'web') {
        const uri = recordingState.getURI();
        console.log(`Extracting chunk at ${countDown}s from ${uri}}`);
      }
      // Here, you would process or analyze the chunk
      updateEmotionData(extractAudioAnalysis());
    }
  };

  React.useEffect(() => {
    if (Platform.OS === 'web') return;
    if (!permissionResponse) {
      requestPermission();
    }
  }, [permissionResponse]);

  React.useEffect(() => {
    handleStartRecording();
    return () => {
      console.log('Cleaning up recording on unmount...', recordingState);
      safeStopRecording();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (countDown <= 0) {
      handleStopRecording();
    }
  }, [countDown]);

  // React.useEffect(() => {
  //   return () => {
  //     if (recordingState) {
  //       console.log('Cleaning up recording on unmount...');
  //       safeStopRecording();
  //     }
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //   };
  // }, [recordingState]);

  return (
    <View className="flex items-center relative flex-1">
      <View className="flex-1 w-full px-2 py-8 ">
        <RecordingContent
          emotionData={emotionData}
          audioMeteringChunks={audioMeteringChunks}
        />
      </View>
      <View className="h-[120px] w-full flex items-center mb-7 gap-3 relative">
        <Text
          className="font-extrabold text-lg"
          style={{
            color: theme.accentActionButton
          }}
        >
          {formatTime(
            Math.floor(countDown / Math.floor(1000 / intervalLength))
          )}
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
              handlePress={handleStopRecording}
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
  onStopRecording: (fruitId: string) => void;
  onPaused?: () => void;
  onPlay?: () => void;
  icon?: React.FC<SvgProps>;
  pausable?: boolean;
};

type Memo = {
  uri: string;
  metering: number[];
};

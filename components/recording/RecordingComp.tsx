import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useMemo } from 'react';
import { Colors } from '@/constants/Colors';
import { formatTime } from '@/utils/time.utils';
import IconButton from '../common/buttons/IconButton';
import Icons from '@/components/icons/Icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { SvgProps } from 'react-native-svg';
import PlayPauseButton from '../common/buttons/PlayPaseButton';

const maxDuration = 600;

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

  const [countDown, setCountDown] = React.useState<number>(maxDuration);
  const isEnd = useMemo(() => countDown <= 0, [countDown]);
  const [isPaused, setIsPaused] = React.useState(false);

  let intervalId: NodeJS.Timeout | null = setInterval(() => {
    setCountDown(countDown - 0.1);
    console.log(countDown);
  }, 100);

  const handleEndCall = () => {
    if (maxDuration - countDown < 0.5) return;
    intervalId && clearInterval(intervalId);
    intervalId = null;
    onEndCall();
  };

  const handlePause = () => {
    if (countDown <= maxDuration) return;
    intervalId && clearInterval(intervalId);
    intervalId = null;
    setIsPaused(true);
    onPaused && onPaused();
  };

  const handlePlay = () => {
    if (countDown <= maxDuration) return;
    intervalId = setInterval(() => {
      setCountDown(countDown - 0.1);
    }, 100);
    setIsPaused(false);
    onPlay && onPlay();
  };

  React.useEffect(() => {
    if (isEnd) {
      intervalId && clearInterval(intervalId);
      intervalId = null;
      onEndCall();
    }

    return () => {
      intervalId && clearInterval(intervalId);
      intervalId = null;
    };
  });

  return (
    <View className="flex items-center relative flex-1">
      <View className="flex-1 flex-grow "></View>
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
          {({ remainingTime, color }) => (
            <IconButton
              handlePress={handleEndCall}
              fill
              icon={() => <IconComp fill={theme.accentActionButton} />}
              size={74}
            />
          )}
        </CountdownCircleTimer>
        {pausable && (
          <>
            <View className="absolute bottom-0 right-9">
              <PlayPauseButton
                handlePause={handlePause}
                handlePlay={handlePlay}
                isPaused={isPaused}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default RecordingComp;

const styles = StyleSheet.create({});

type RecordingCompProps = {
  onEndCall: () => void;
  onPaused?: () => void;
  onPlay?: () => void;
  icon?: React.FC<SvgProps>;
  pausable?: boolean;
};

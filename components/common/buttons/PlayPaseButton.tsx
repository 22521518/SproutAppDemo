import React from 'react';
import Icons from '@/constants/Icons';
import IconButton from './IconButton';
import { useColorScheme, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const PlayPauseButton = ({
  handlePause,
  handlePlay,
  isPaused
}: PlayPauseButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <>
      {isPaused ? (
        <IconButton
          handlePress={handlePlay}
          icon={() => <Icons.Play fill={theme.accentActionButton} />}
          size={56}
          fill
          border
        />
      ) : (
        <IconButton
          handlePress={handlePause}
          icon={() => <Icons.Pause fill={theme.accentActionButton} />}
          size={56}
          fill
          border
        />
      )}
    </>
  );
};

export default PlayPauseButton;

const styles = StyleSheet.create({});

type PlayPauseButtonProps = {
  handlePause: () => void;
  handlePlay: () => void;
  isPaused: boolean;
};

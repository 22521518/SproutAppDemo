import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import IconButton from '../common/buttons/IconButton';
import Icons from '@/components/icons/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RecordingReward = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <View className="flex items-center relative flex-1">
      <View className="flex-1 flex-grow "></View>
      <View className="h-[120px] w-full flex items-center mb-7 gap-3 relative">
        <IconButton
          handlePress={() => {}}
          fill
          icon={() => <Icons.Scissors fill={theme.accentActionButton} />}
          size={74}
        />
        <View className="absolute bottom-0 right-9">
          <IconButton
            handlePress={() => {}}
            fill
            icon={() => <Icons.Scissors fill={theme.accentActionButton} />}
            size={74}
          />
        </View>
      </View>
    </View>
  );
};

export default RecordingReward;

const styles = StyleSheet.create({});

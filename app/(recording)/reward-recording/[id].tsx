import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';
import TabHeader from '@/components/layouts/TabHeader';
import { useLocalSearchParams } from 'expo-router';
import { getFruit } from '@/utils/data.utils';
import RecordingReward from '@/components/recording/RecordingReward';

const RewardRecording = () => {
  const { id } = useLocalSearchParams();
  const fruitId = id as string;
  const fruit = getFruit(fruitId);
  return (
    <CustomSafeAreaView className="justify-between">
      <TabHeader />
      <RecordingReward fruit={fruit} />
    </CustomSafeAreaView>
  );
};

export default RewardRecording;

const styles = StyleSheet.create({});

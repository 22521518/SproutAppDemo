import { StyleSheet } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import RecordingComp from '@/components/recording/RecordingComp';
import { router } from 'expo-router';
import Icons from '@/components/icons/Icons';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const Recording = () => {
  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  const onStopRecording = (fruitId: string) => {
    handleGoBack();
    router.replace({
      pathname: '/reward-recording/[id]',
      params: { id: fruitId }
    });
  };

  return (
    <CustomSafeAreaView className="justify-between">
      <TabHeader />
      <RecordingComp onStopRecording={onStopRecording} icon={Icons.Recording} />
    </CustomSafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

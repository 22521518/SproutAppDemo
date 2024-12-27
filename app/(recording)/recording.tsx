import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import RecordingComp from '@/components/recording/RecordingComp';
import { router } from 'expo-router';
import Icons from '@/constants/Icons';

const Recording = () => {
  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  const onEndCall = () => {
    handleGoBack();
  };
  return (
    <SafeAreaView className="h-dvh flex flex-col relative justify-between">
      <TabHeader />
      <RecordingComp onEndCall={onEndCall} icon={Icons.Recording} />
    </SafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

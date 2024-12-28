import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import TabHeader from '@/components/layouts/TabHeader';

const FriendQueryLayout = () => {
  return (
    <SafeAreaView className="flex flex-col relative pt-10">
      <Slot />
    </SafeAreaView>
  );
};

export default FriendQueryLayout;

const styles = StyleSheet.create({});

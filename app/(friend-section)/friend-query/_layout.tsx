import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import TabHeader from '@/components/layouts/TabHeader';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const FriendQueryLayout = () => {
  return (
    <CustomSafeAreaView>
      <Slot />
    </CustomSafeAreaView>
  );
};

export default FriendQueryLayout;

const styles = StyleSheet.create({});

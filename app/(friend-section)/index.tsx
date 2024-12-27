import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/layouts/TabHeader';

const FriendsQuery = () => {
  return (
    <SafeAreaView className="flex flex-col relative">
      <TabHeader title="Friends" />
      <View className="px-4 pb-4">Friend Query</View>
    </SafeAreaView>
  );
};

export default FriendsQuery;

const styles = StyleSheet.create({});

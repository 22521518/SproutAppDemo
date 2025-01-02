import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const FriendsQuery = () => {
  return (
    <CustomSafeAreaView>
      <TabHeader title="Friends" />
      <View className="px-4 pb-4">Friend Query</View>
    </CustomSafeAreaView>
  );
};

export default FriendsQuery;

const styles = StyleSheet.create({});

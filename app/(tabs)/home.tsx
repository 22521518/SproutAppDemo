import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import TreeListComp from '@/components/common/lists/TreeListComp';

const Home = () => {
  const today = new Date().getFullYear();
  return (
    <SafeAreaView className="flex flex-col relative h-dvh">
      <TabHeader title="Home" />
      <View className="flex-1 bg-secondary-white max-h-[70%] min-h-[70%] px-1 items-center">
        <TreeListComp year={today} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TabHeader from '@/components/layouts/TabHeader';
import TreeListComp from '@/components/common/lists/TreeListComp';
import { useLocalSearchParams } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const Home = () => {
  const { year } = useLocalSearchParams();

  const today = (year as string) ? (year as string) : new Date().getFullYear();

  return (
    <CustomSafeAreaView>
      <TabHeader title="Home" />
      <View className="flex-1 bg-secondary-white max-h-[80%] min-h-[70%] px-1 items-center">
        <TreeListComp year={today} />
      </View>
    </CustomSafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

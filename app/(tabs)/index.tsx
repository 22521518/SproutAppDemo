import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/layouts/TabHeader';
import { GetToday } from '@/utils/time.utils';
import BackHeader from '@/components/layouts/BackHeader';

const Recording = () => {
  const today = GetToday();
  const year = new Date().getFullYear();
  return (
    <SafeAreaView>
      <TabHeader title={today} />
      <View className="flex-1 mb-8 flex justify-center items-center px-5 pb-3 h-full">
        <View className="bg-secondary-white h-[80%] w-full rounded-[50px] flex flex-col items-center drop-shadow-lg  overflow-hidden">
          <Text>Sad</Text>
          <View className="grid grid-rows-2 grid-cols-1 gap-4 h-full w-full items-center justify-center place-content-center relative overflow-hidden pt-20">
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

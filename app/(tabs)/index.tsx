import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/layouts/TabHeader';
import { GetToday } from '@/utils/time.utils';

const Recording = () => {
  const today = GetToday();
  return (
    <SafeAreaView>
      <TabHeader title={today} />
      {/* <Text>Friends</Text> */}
    </SafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});

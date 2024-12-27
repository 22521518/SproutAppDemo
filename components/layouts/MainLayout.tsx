import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';

const MainLayout = () => {
  return (
    <View>
      <Text>MainLayout</Text>
      <Slot />
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});

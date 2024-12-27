import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

const RecordingLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background }
      }}
    >
      <Stack.Screen name="recording" />
    </Stack>
  );
};

export default RecordingLayout;

const styles = StyleSheet.create({});

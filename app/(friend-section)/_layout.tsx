import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';

const FriendListLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background }
      }}
    >
      <Stack.Screen name="friend-home" />
      <Stack.Screen name="index" />
      <Stack.Screen name="friend-query" />
    </Stack>
  );
};

export default FriendListLayout;

const styles = StyleSheet.create({});

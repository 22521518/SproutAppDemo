import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router/stack';
import { Colors } from '@/constants/Colors';

const FriendRootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background }
      }}
    >
      <Stack.Screen name="[id]/call" />
      <Stack.Screen name="[id]/index" />
    </Stack>
  );
};

export default FriendRootLayout;

const styles = StyleSheet.create({});

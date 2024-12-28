import '../global.css';
import { SplashScreen } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useFonts } from 'expo-font';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [fontsLoaded, error] = useFonts({});

  React.useEffect(() => {
    if (error) {
      console.log(error);
      throw new Error('Failed to load fonts');
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={!(colorScheme === 'dark') ? DarkTheme : DefaultTheme}>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background }
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="(friend-section)"
          options={{ headerShown: false }}
        />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
};

export default RootLayout;

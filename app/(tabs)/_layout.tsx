import { SafeAreaView, useColorScheme, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import TabIcon from '@/components/tabs/TabIcon';
import Icons from '@/components/icons/Icons';
import RecordButton from '@/components/common/buttons/RecordButton';
import { Colors } from '@/constants/Colors';
import { useNavigationState } from '@react-navigation/native';

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const gradientColors =
    colorScheme === 'dark'
      ? ['#8C9EFF', '#545F99'] // Dark theme gradient
      : ['#D0E7B9', '#748167'];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Tabs
        screenOptions={{
          header: () => null,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: theme.accentActionButton,
          tabBarInactiveTintColor: theme['secondary-white'],
          tabBarStyle: {
            height: 64,
            backgroundColor: theme.tabBarColor,
            position: 'relative',
            alignContent: 'center',
            justifyContent: 'center',
            overflow: 'visible',
            paddingBlockStart: 10,
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
            paddingTop: 10,
            borderBlockColor: theme.tabBarColor
          },
          sceneStyle: {
            backgroundColor: theme.background
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <Tabs.Screen
          name="friends"
          options={{
            title: 'Friends',
            tabBarIcon: ({ color, focused }) => (
              <>
                <Icons.FriendTab
                  width={48}
                  height={48}
                  fill={
                    focused
                      ? theme.accentActionButton
                      : theme['secondary-white']
                  }
                />
                {focused && (
                  <View
                    className="w-[80%] h-1"
                    style={{
                      backgroundColor: theme.accentActionButton,
                      position: 'absolute',
                      bottom: -10,
                      left: '10%',
                      right: '10%',
                      borderRadius: 50
                    }}
                  />
                )}
              </>
            )
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Recording',
            tabBarItemStyle: {
              position: 'relative',
              overflow: 'visible'
            },
            tabBarIconStyle: {
              position: 'relative'
            },
            tabBarIcon: ({ color, focused }) => {
              return <RecordButton color={color} focused={focused} />;
            }
          }}
        />
        <Tabs.Screen
          name={`home/index`}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => {
              const currentRoute = useNavigationState(
                (state) => state.routes[state.index].name
              );
              const active = currentRoute.includes('home') || focused;
              return (
                <>
                  <Icons.HomeTab
                    width={48}
                    height={48}
                    fill={
                      active
                        ? theme.accentActionButton
                        : theme['secondary-white']
                    }
                  />
                  {active && (
                    <View
                      className="w-[80%] h-1"
                      style={{
                        backgroundColor: theme.accentActionButton,
                        position: 'absolute',
                        bottom: -10,
                        left: '10%',
                        right: '10%',
                        borderRadius: 50
                      }}
                    />
                  )}
                </>
              );
            }
          }}
        />
        <Tabs.Screen
          name="home/[year]/index"
          options={{
            href: null
          }}
        />

        <Tabs.Screen
          name="home/(home-section)/tree/[id]/index"
          options={{
            href: null
          }}
        />

        <Tabs.Screen
          name="home/(home-section)/tree/[id]/part/[partId]/index"
          options={{
            href: null
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;

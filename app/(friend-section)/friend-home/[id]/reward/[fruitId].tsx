import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';
import { useLocalSearchParams } from 'expo-router';
import { getFruit } from '@/utils/data.utils';
import RecordingReward from '@/components/recording/RecordingReward';
import BackHeader from '@/components/layouts/BackHeader';
import { Colors } from '@/constants/Colors';
import { user } from '@/data/dummy-data.constant';
import AvatarIcons from '@/components/icons/AvatarIcons';

const RewardRecording = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const { fruitId } = useLocalSearchParams();
  const fruit = getFruit(fruitId as string);
  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];
  return (
    <CustomSafeAreaView className="justify-between">
      <BackHeader
        handleGoBack={() => {}}
        disableBack
        icon={() => (
          <View className="size-[60] border-4 pt-1 border-solid bg-bg-avatar-light border-accent-bg-light dark:bg-bg-avatar-dark dark:border-accent-bg-dark rounded-full  flex items-center justify-centers relative drop-shadow-2xl">
            <View className="absolute bottom-0">
              <AvatarIconComponent />
            </View>
          </View>
        )}
      >
        <View className="flex flex-col items-center">
          <Text
            className="font-bold text-3xl"
            style={{ color: theme.accentColor }}
          >
            #{user.usernameId}
          </Text>
          <Text className="text-base" style={{ color: theme.accentColor }}>
            {user.username}
          </Text>
        </View>
      </BackHeader>
      <RecordingReward fruit={fruit} />
    </CustomSafeAreaView>
  );
};

export default RewardRecording;

const styles = StyleSheet.create({});

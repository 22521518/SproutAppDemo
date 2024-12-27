import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import BackHeader from '@/components/layouts/BackHeader';
import { Colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import { GetUser } from '@/utils/data.utils';
import AvatarIcons from '@/constants/AvatarIcons';
import IconButton from '@/components/common/buttons/IconButton';
import Icons from '@/constants/Icons';
import { formatTime } from '@/utils/time.utils';
import RecordingComp from '@/components/recording/RecordingComp';

const FriendCall = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const { id } = useLocalSearchParams();
  const user = GetUser(id as string);
  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const onEndCall = () => {
    router.back();
  };

  return (
    <SafeAreaView className="h-dvh flex flex-col relative justify-between">
      <BackHeader
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
      <View className="flex-1">
        <Text>FriendCall {id}</Text>
      </View>
      <RecordingComp onEndCall={onEndCall} />
    </SafeAreaView>
  );
};

export default FriendCall;

const styles = StyleSheet.create({});
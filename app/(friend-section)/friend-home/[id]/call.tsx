import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import BackHeader from '@/components/layouts/BackHeader';
import { Colors } from '@/constants/Colors';
import { router, useLocalSearchParams } from 'expo-router';
import { getUser } from '@/utils/data.utils';
import AvatarIcons from '@/components/icons/AvatarIcons';
import RecordingComp from '@/components/recording/RecordingComp';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';

const FriendCall = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const { id } = useLocalSearchParams();
  const user = getUser(id as string);
  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const onEndCall = (fruitId: string) => {
    handleGoBack();
    router.push({
      pathname: `/friend-home/[id]/reward/[fruitId]`,
      params: { id: user.usernameId, fruitId: fruitId }
    });
  };

  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/friends');
  };

  return (
    <CustomSafeAreaView className="justify-between">
      <BackHeader
        handleGoBack={handleGoBack}
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

      <RecordingComp onEndCall={onEndCall} />
    </CustomSafeAreaView>
  );
};

export default FriendCall;

const styles = StyleSheet.create({});

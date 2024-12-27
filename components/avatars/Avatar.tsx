import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import AvatarIcons from '@/constants/AvatarIcons';
import { User } from '@/constants/type.constant';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function Avatar({ user }: AvatarProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const handleAvatarPress = () => {
    router.push(`/friend-home/${user.usernameId}`);
    console.log('Avatar Pressed');
  };

  return (
    <TouchableOpacity
      className="size-[60] border-4 pt-1 border-solid bg-bg-avatar-light border-accent-bg-light dark:bg-bg-avatar-dark dark:border-secondary-white rounded-full  flex items-center justify-centers relative drop-shadow-2xl"
      activeOpacity={0.6}
      onPress={handleAvatarPress}
      style={{
        opacity: user.isOnline ? 1 : 0.5
      }}
    >
      <Text className="font-bold text-sm text-accent-bg-light dark:text-accent-bg-dark text-center opacity-95">
        {user.usernameId}
      </Text>
      <View className="absolute bottom-0">
        <AvatarIconComponent />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

type AvatarProps = {
  user: User;
};

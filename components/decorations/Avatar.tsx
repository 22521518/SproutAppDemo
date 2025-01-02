import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import AvatarIcons from '@/components/icons/AvatarIcons';
import { UserType } from '@/models/type.model';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

export default function Avatar({ user, className, style }: AvatarProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const handleAvatarPress = () => {
    router.push(`/friend-home/${user.usernameId}`);
  };

  return (
    <TouchableOpacity
      className="bg-bg-avatar-light border-accent-bg-light dark:bg-bg-avatar-dark dark:border-secondary-white drop-shadow-2xl"
      activeOpacity={0.6}
      onPress={handleAvatarPress}
      style={{
        opacity: user.isOnline ? 1 : 0.5,
        ...styles.container,
        ...style
      }}
    >
      <Text
        className="text-accent-bg-light dark:text-accent-bg-dark font-bold"
        style={{
          ...styles.text
        }}
      >
        {user.usernameId}
      </Text>
      <View className="absolute bottom-0">
        <AvatarIconComponent />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    aspectRatio: 1,
    borderStyle: 'solid',
    borderRadius: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative'
  },
  text: {
    fontSize: 14,
    fontWeight: 800,
    textAlign: 'center',
    opacity: 0.95
  }
});

type AvatarProps = {
  user: UserType;
  className?: string;
  style?: any;
};

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import BackHeader from '@/components/layouts/BackHeader';
import { getUser } from '@/utils/data.utils';
import { Colors } from '@/constants/Colors';
import AvatarIcons from '@/components/icons/AvatarIcons';
import IconButton from '@/components/common/buttons/IconButton';
import Icons from '@/components/icons/Icons';

const FriendHome = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const { id } = useLocalSearchParams();
  const user = getUser(id as string);
  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const [count, setCount] = React.useState<number>(4);

  const handleCall = () => {
    if (count <= 0) {
      Alert.alert('No more calls left');
      return;
    }
    setCount(count + 1);
    router.push(`/friend-home/${user.usernameId}/call`);
  };

  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/friends');
  };

  return (
    <SafeAreaView className="h-full flex flex-col relative justify-between">
      <BackHeader
        handleGoBack={handleGoBack}
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
        <Text>FriendHome {id}</Text>
      </View>
      <View className="h-[120px] min-h-10dvd max-h-15dvd flex items-center pb-7 relative bottom-0">
        <IconButton
          count={count}
          handlePress={handleCall}
          icon={() => <Icons.Call />}
        />
      </View>
    </SafeAreaView>
  );
};

export default FriendHome;

const styles = StyleSheet.create({});

import '@/global.css';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabHeader from '@/components/layouts/TabHeader';
import Avatar from '@/components/avatars/Avatar';
import Icons from '@/components/icons/Icons';
import { router } from 'expo-router';
import { user } from '@/constants/dummy-data.constant';
import { Colors } from '@/constants/Colors';
import { UserType } from '@/constants/type.constant';
import FriendListComp from '@/components/common/lists/FriendListComp';
import { verifyInstallation } from 'nativewind';

const Friends = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const friendList: UserType[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
    return { ...user, isOnline: Math.random() > 0.5 };
  });

  const onlineFriends = React.useMemo(
    () => friendList.filter((friend) => friend.isOnline),
    [friendList]
  );

  const offlineFriends = React.useMemo(
    () => friendList.filter((friend) => !friend.isOnline),
    [friendList]
  );

  const handleSearchPress = () => {
    router.push('/friend-query');
  };

  verifyInstallation();

  return (
    <SafeAreaView className="flex flex-col relative">
      <TabHeader title="Friends" />
      <View className="px-4 pb-4 mt-1 flex flex-col">
        <View className="px-6 flex flex-row items-center justify-between relative mb-6">
          <Text className="text-lg font-bold ml-auto mr-auto text-accent-bg-light dark:text-accent-bg-dark">
            total - {friendList.length}
          </Text>
          <TouchableOpacity
            className="absolute right-2 p-4"
            onPress={handleSearchPress}
          >
            <Icons.Search fill={theme.avatarBackground} />
          </TouchableOpacity>
        </View>
        <View>
          <FriendListComp userList={[...onlineFriends, ...offlineFriends]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Friends;

const styles = StyleSheet.create({});

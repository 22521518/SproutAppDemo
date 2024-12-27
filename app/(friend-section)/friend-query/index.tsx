import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { offlineUser, user } from '@/constants/dummy-data.constant';
import { Link, router, useLocalSearchParams } from 'expo-router';
import Icons from '@/constants/Icons';
import { Colors } from '@/constants/Colors';
import { User } from '@/constants/type.constant';
import FormField from '@/components/common/forms/FormField';
import FriendListComp from '@/components/common/lists/FriendListComp';

const FriendsQuery = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const { q } = useLocalSearchParams();

  const [query, setQuery] = React.useState<string>((q as string) ?? '');

  const friendList = [1, 2, 3, 4, 5].map(() => {
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

  const otherUsers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => user);

  const handleGoBack = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/friends');
  };

  const handleClear = () => {
    if (query) setQuery('');
  };

  return (
    <View className="px-4 pb-4 flex flex-col relative">
      <View className="px-4 flex flex-row items-center justify-between relative gap-4">
        <TouchableOpacity className="" onPress={handleGoBack}>
          {colorScheme === 'dark' ? (
            <Icons.BackArrowDark fill={theme.avatarBackground} />
          ) : (
            <Icons.BackArrowLight fill={theme.avatarBackground} />
          )}
        </TouchableOpacity>
        <FormField
          title=""
          value={query}
          handChangeText={(text) => setQuery(text)}
          placeholder="Find friends"
          otherStyles="w-[60%] flex-1 pb-2"
        />
        <TouchableOpacity
          className="flex items-center justify-center"
          onPress={handleClear}
        >
          {!query ? (
            <Icons.Search fill={theme.avatarBackground} />
          ) : (
            <Icons.Cross width={24} height={24} fill={theme.accentColor} />
          )}
        </TouchableOpacity>
      </View>

      <FriendListComp
        userList={[...onlineFriends, ...offlineFriends]}
        title="friends"
        className="px-4 pb-4 mt-1 flex flex-col"
      />
      <FriendListComp
        userList={otherUsers}
        title="others"
        className="px-4 pb-4 mt-1 flex flex-col"
      />
    </View>
  );
};

export default FriendsQuery;

const styles = StyleSheet.create({});

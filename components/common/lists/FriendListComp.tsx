import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UserType } from '@/constants/type.constant';
import Avatar from '@/components/avatars/Avatar';

const FriendListComp = ({ userList, title }: FriendListCompProps) => {
  return (
    <>
      {title && (
        <View className="px-6 flex flex-row items-center justify-between relative">
          <Text className="text-lg font-bold ml-auto mr-auto text-accent-bg-light dark:text-accent-bg-dark">
            {title} - {userList.length}
          </Text>
        </View>
      )}
      <View className="px-10 pt-3 grid grid-cols-3 gap-6 ">
        {userList.map((u, index) => (
          <View className="flex flex-col items-center" key={index}>
            <Avatar user={u} />
          </View>
        ))}
      </View>
    </>
  );
};

export default FriendListComp;

const styles = StyleSheet.create({});

type FriendListCompProps = {
  userList: UserType[];
  title?: string;
};

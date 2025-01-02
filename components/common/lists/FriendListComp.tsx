import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { UserType } from '@/models/type.model';
import Avatar from '@/components/decorations/Avatar';

const FriendListComp = ({ userList, title }: FriendListCompProps) => {
  return (
    <View style={styles.container}>
      {title && (
        <View className="px-6 flex flex-row items-center justify-between relative w-full">
          <Text className="text-lg font-bold mx-auto text-accent-bg-light dark:text-accent-bg-dark">
            {title} - {userList.length}
          </Text>
        </View>
      )}
      <View style={styles.friendContainer}>
        {userList.map((u, index) => (
          <View key={index} style={styles.friendItem}>
            <Avatar user={u} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default FriendListComp;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 6
  },
  friendContainer: {
    flexDirection: 'row', // Arrange items in a row
    flexWrap: 'wrap', // Allow wrapping to next line
    justifyContent: 'center', // Add space between items
    paddingHorizontal: 10, // Replace 'paddingInline'
    paddingTop: 3,
    gap: 18, // React Native now supports gap in newer versions; if not, handle manually
    width: '100%',
    height: 'auto'
  },
  friendItem: {
    width: '25%' // 2 items per row
  }
});

type FriendListCompProps = {
  userList: UserType[];
  title?: string;
};

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
import { getHomieTree, getUser } from '@/utils/data.utils';
import { Colors } from '@/constants/Colors';
import AvatarIcons from '@/components/icons/AvatarIcons';
import IconButton from '@/components/common/buttons/IconButton';
import Icons from '@/components/icons/Icons';
import CustomSafeAreaView from '@/components/layouts/CustomSafeAreaView';
import {
  ColorTreeTypeMap,
  MonthDictions
} from '@/constants/dictionary.constant';
import { TreeColorTypeEnum } from '@/models/enum.model';
import { DummyTreePart } from '@/utils/dummy-data.utils';
import TreePartComponent from '@/components/trees/TreePart';

const FriendHome = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const { id } = useLocalSearchParams();
  const user = getUser(id as string);
  const avatarTheme =
    colorScheme === 'dark' ? AvatarIcons.dark : AvatarIcons.light;
  const AvatarIconComponent = avatarTheme[user.avatar];

  const homieTree = getHomieTree(user.usernameId);
  const colorTree =
    theme[
      ColorTreeTypeMap[
        (homieTree?.color as keyof typeof ColorTreeTypeMap) ??
          TreeColorTypeEnum.SPRING24
      ] as keyof typeof theme
    ];

  const partList =
    homieTree?.parts.length <= 0
      ? [1, 2].map((i) => DummyTreePart(i, 1, 1))
      : homieTree?.parts;
  const sortedPartList = React.useMemo(
    () => partList.sort((a, b) => a.level - b.level),
    [partList]
  );

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
    <CustomSafeAreaView className=" justify-between">
      <BackHeader
        handleGoBack={handleGoBack}
        icon={() => (
          <View className="size-16 border-4 pt-1 border-solid bg-bg-avatar-light border-accent-bg-light dark:bg-bg-avatar-dark dark:border-accent-bg-dark rounded-full flex items-center justify-centers relative drop-shadow-2xl">
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
      <View className="flex-1 mb-8 flex justify-center items-center px-5 pb-3 h-full">
        <View className="bg-secondary-white h-full w-full rounded-[50px] px-10 flex flex-col items-center drop-shadow-lg overflow-hidden">
          <Text
            className="text-2xl font-bold text-center"
            style={{
              color: colorTree
            }}
          >
            {MonthDictions[homieTree?.month ?? 1]}
          </Text>
          <View className="relative h-full w-full max-h-[70%] flex flex-col">
            {[3, 2, 1, 0].map((i) => {
              const increaseWidth = [50, 33, 13, 0];
              const part = sortedPartList[i];
              return part ? (
                <TreePartComponent
                  handlePress={() => {}}
                  key={i}
                  part={part}
                  className={`relative`}
                />
              ) : (
                <View
                  key={i}
                  className=" mx-auto relative bottom-0"
                  style={{
                    gridRowStart: `span ${Math.max(5 - i, 2)}`,
                    width: `${50 + increaseWidth[i]}%`,
                    height: `100%`
                  }}
                ></View>
              );
            })}
          </View>
        </View>
      </View>

      <View className="h-[120px] min-h-10dvd max-h-15dvd flex items-center pb-7 relative bottom-0">
        <IconButton
          count={count}
          handlePress={handleCall}
          icon={() => <Icons.Call />}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default FriendHome;

const styles = StyleSheet.create({});

import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import RecordIcon from '../../icons/RecordIcon';

type RecordButtonProps = {
  color: string;
  focused: boolean;
};

export default function RecordButton({ color, focused }: RecordButtonProps) {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [count, setCount] = React.useState(10);

  const currentRoute = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const [trickLord, setTrickLord] = React.useState(0);
  const [active, setActive] = React.useState(currentRoute === 'index');

  const handlePress = React.useCallback(() => {
    if (trickLord > 0) {
      router.push('/recording');
    } else {
      setTrickLord(trickLord + 1);
    }
  }, [currentRoute]);

  React.useEffect(() => {
    setActive(currentRoute === 'index');
    setTrickLord(0);
  }, [currentRoute]);

  return (
    <View
      onPointerDown={handlePress}
      className={`record-btn size-[96px] bottom-4 rounded-full relative justify-center items-center border-4 border-solid border-accent-button-light dark:border-accent-button-dark shadow-black drop-shadow-lg  ${
        active
          ? 'bg-accent-button-light dark:bg-accent-button-dark '
          : 'bg-secondary-white dark:bg-secondary-white border-opacity-80 dark:border-opacity-80'
      }`}
    >
      <RecordIcon isCurrent={active} />
      <Text
        className={`font-bold text-xl ${
          active
            ? 'text-secondary-white'
            : 'text-accent-button-light dark:text-accent-bg-dark'
        } absolute bottom-0`}
      >
        {count}
      </Text>
      {focused && (
        <View className="w-max round-full border-solid border-4 border-main border-tab-bar-light dark:border-tab-bar-dark rounded-full absolute bottom-0 right-0 ">
          <View className="record-icon size-6 rounded-full bg-accent-button-light border-solid border-4 border-white "></View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

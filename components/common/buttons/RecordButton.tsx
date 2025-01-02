import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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
  const router = useRouter();
  const currentRoute = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const [trickLord, setTrickLord] = React.useState(0);

  // const handlePress = React.useCallback(() => {
  //   if (trickLord > 0) {
  //     var cntDwn = 2;
  //     const dummyInterval = setInterval(() => {
  //       cntDwn--;
  //       if (cntDwn === 0) {
  //         clearInterval(dummyInterval);
  //         router.push('/recording');
  //       }
  //     }, 10);
  //   } else {
  //     setTrickLord(trickLord + 1);
  //   }
  // }, [currentRoute]);
  const isActive = currentRoute === 'index';
  const handlePress = () => {
    if (isActive) {
      // Perform activation logic
      console.log('Button activated on index screen');
      router.push('/recording');
      // Add any additional logic here, e.g., starting a recording
    } else {
      // Navigate to the index screen
      router.push('/(tabs)');
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      className={`record-btn size-[96px] bottom-4 rounded-full relative justify-center items-center border-4 border-solid border-accent-button-light dark:border-accent-button-dark shadow-black drop-shadow-lg  ${
        focused
          ? 'bg-accent-button-light dark:bg-accent-button-dark '
          : 'bg-secondary-white dark:bg-secondary-white border-opacity-80 dark:border-opacity-80'
      }`}
    >
      <RecordIcon isCurrent={focused} />
      <Text
        className={`font-bold text-xl ${
          focused
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

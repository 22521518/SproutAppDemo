import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { SvgProps } from 'react-native-svg';

const IconButton = ({
  count,
  icon,
  handlePress,
  fill,
  border,
  size
}: IconButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const IconComp = icon;

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`record-btn size-[96px] bottom-4 rounded-full relative justify-around items-center shadow-black drop-shadow-lg top-0 ${
        fill
          ? ' bg-secondary-white '
          : ' bg-accent-button-light dark:bg-accent-button-dark '
      }
      ${
        border
          ? ' border-8 border-solid border-accent-button-light dark:border-accent-button-dark'
          : ''
      }
      `}
      style={{
        width: size ? size : 96,
        height: size ? size : 96
      }}
    >
      <IconComp width={48} height={48} />
      {count ? (
        <Text
          className={`font-bold text-lg text-secondary-white absolute -bottom-1 `}
        >
          {count}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({});

type IconButtonProps = {
  count?: number;
  icon: React.FC<SvgProps>;
  handlePress: () => void;
  fill?: boolean;
  border?: boolean;
  size?: number;
};

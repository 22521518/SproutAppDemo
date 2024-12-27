import { Image, Text } from 'react-native';
import { View } from 'react-native';

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

export default function TabIcon({ icon, color, name, focused }: TabIconProps) {
  return (
    <View className="items-center justify-center gap-2 w-full h-full">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        style={{
          width: 20,
          height: 20
        }}
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs `}
        style={{
          color: color
        }}
      >
        {name}
      </Text>
    </View>
  );
}

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import React from 'react';
import IconButton from '../common/buttons/IconButton';
import Icons from '@/components/icons/Icons';
import { FruitType } from '@/models/type.model';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import {
  EmotionTypeColorMap,
  EmotionTypeNameMap,
  EmotionTypeShapeMap,
  OutlineFruitTypeMap
} from '@/constants/dictionary.constant';
import FruitPaternIcon from '../decorations/FruitPatern';

const RecordingReward = ({ fruit }: RecordingRewardProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const colorTitle = EmotionTypeColorMap(fruit.type, theme);
  const onShowMessage = () => {
    console.log('show message');
  };

  const onCancel = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  const onFinished = () => {
    onCancel();
  };

  return (
    <View className="flex items-center relative flex-1">
      <View className="flex-1 w-full px-2">
        <View className="bg-secondary-white min-h-[300px] my-auto max-h-[500px] w-full rounded-[50px] flex flex-col  drop-shadow-lg px-4 gap-4 relative overflow-hidden">
          <View className="w-full h-max px-8 flex flex-row justify-center items-center">
            <Text
              className="font-semibold text-lg text-center"
              style={{
                color: colorTitle
              }}
            >
              Congratulations!!
              {'\n'}
              You got a {EmotionTypeNameMap[fruit.type]} Fruit
            </Text>
          </View>
          <View className="flex flex-grow max-h-[200px] flex-row items-center justify-between gap-2 w-full">
            <View className="w-[48%] h-full justify-center items-center">
              <FruitPaternIcon fruit={fruit} />
            </View>
            <View className="w-[40%] gap-4 flex flex-col justify-evenly">
              {fruit.emotions &&
                Object.entries(fruit.emotions).map(
                  ([key, value]: [
                    string,
                    {
                      type: keyof typeof EmotionTypeNameMap;
                      indicators: number;
                    }
                  ]) => {
                    const colorText = EmotionTypeColorMap(value.type, theme);
                    const ShapeIconComp = EmotionTypeShapeMap[value.type];
                    return (
                      <View className="flex flex-row justify-between">
                        <View className="flex flex-row gap-1 items-center justify-center">
                          <ShapeIconComp width={20} height={20} />
                          <Text
                            key={key}
                            style={{
                              color: colorText,
                              ...styles.textIndicator
                            }}
                          >
                            {EmotionTypeNameMap[value.type]}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: colorText,
                            ...styles.textIndicator
                          }}
                        >
                          {value.indicators}%
                        </Text>
                      </View>
                    );
                  }
                )}
            </View>
          </View>
          <View className="w-full h-[64px] mt-auto bg-secondary-white ">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onShowMessage}
              style={{
                width: '120%',
                backgroundColor: colorTitle,
                height: '100%',
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  color: theme['secondary-white'],
                  ...styles.textMessageBtn
                }}
              >
                SEE MESSAGE!!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="h-[120px] w-full flex flex-row items-center mb-7 relative justify-center gap-12">
        <View className="w-[52px]"></View>
        <View className="">
          <IconButton
            handlePress={onFinished}
            icon={() => (
              <Icons.Tick
                fill={theme.accentActionButton}
                width={48}
                height={36}
              />
            )}
            size={96}
          />
        </View>
        <View className="">
          <IconButton
            handlePress={onCancel}
            fill
            border
            icon={() => <Icons.Scissors fill={theme.accentActionButton} />}
            size={52}
          />
        </View>
      </View>
    </View>
  );
};

export default RecordingReward;

const styles = StyleSheet.create({
  textMessageBtn: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 800
  },
  textIndicator: {
    textTransform: 'lowercase',
    fontWeight: 800,
    fontSize: 14
  }
});

type RecordingRewardProps = {
  fruit: FruitType;
};

import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomSafeAreaView = ({
  children,
  className,
  style
}: CustomSafeAreaViewProps) => {
  return (
    <SafeAreaView
      className={`h-full flex flex-col relative ${className}`}
      style={style}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({});

type CustomSafeAreaViewProps = {
  children: React.ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
};

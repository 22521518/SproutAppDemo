import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GradientContent = ({ children, className }: GradientContentProps) => {
  return (
    <View
      className={`bg-gradient-to-b from-[#fff7ec] to-[#99948d] ${className}`}
    >
      {children}
    </View>
  );
};

export default GradientContent;

const styles = StyleSheet.create({});

type GradientContentProps = {
  children: React.ReactNode;
  className?: string;
};

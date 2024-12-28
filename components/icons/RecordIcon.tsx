import { StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import Icons from '@/components/icons/Icons';

interface RecordIconProps {
  isCurrent: boolean;
}

interface IconComponentProps {
  width: number;
  height: number;
}

export default function RecordIcon({ isCurrent }: RecordIconProps) {
  const colorScheme = useColorScheme(); // Automatically triggers rerender on theme change

  const IconComponent = isCurrent ? Icons.SunnyActive : Icons.SunnyInactive;

  if (colorScheme === 'dark') {
    return isCurrent ? (
      <Icons.MoonActive width={64} height={64} />
    ) : (
      <Icons.MoonInactive width={64} height={64} />
    );
  }

  return <IconComponent width={48} height={48} />;
}

const styles = StyleSheet.create({});

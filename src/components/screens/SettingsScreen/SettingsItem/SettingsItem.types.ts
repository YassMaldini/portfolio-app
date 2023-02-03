import { ReactNode } from 'react';

export interface SettingsItemProps {
  label: string;
  rightElement?: ReactNode;
  onPress?: () => void;
}

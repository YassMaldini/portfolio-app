import { ImageSource } from '../../../types/models/images.types';
import { PressableProps } from '../../designSystem/Pressable/Pressable.types';

export interface ProjectListItemProps extends PressableProps {
  title: string;
  stack: string[];
  date: string;
  images: ImageSource[];
}

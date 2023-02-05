import { ImageSource } from '../../../../types/models/images.types';

export interface ProjectsListProps {
  setImages: (images: ImageSource[]) => void;
  setIsImageViewerVisible: (isImageViewerVisible: boolean) => void;
}

export interface ProjectsListData {
  title: string;
  stack: string[];
  date: string;
  images: ImageSource[];
}

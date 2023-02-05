import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { ImageSource } from '../../../../types/models/images.types';
import ProjectListItem from '../../../commons/ProjectListItem/ProjectListItem';
import Box from '../../../designSystem/Box/Box';
import { projectsListData } from './ProjectsList.data';
import { ProjectsListProps } from './ProjectsList.types';

const ProjectsList = ({ setImages, setIsImageViewerVisible }: ProjectsListProps) => {
  const { t } = useTranslation();

  const projectsList = useMemo(() => projectsListData(t), [t]);

  const openImageViewer = (images: ImageSource[]) => {
    if (images.length > 0) {
      setIsImageViewerVisible(true);
      setImages(images);
    } else {
      Alert.alert('No screenshots for this project');
    }
  };

  return (
    <Box marginTop="m">
      {projectsList.map((project, index) => (
        <ProjectListItem key={index} onPress={() => openImageViewer(project.images)} {...project} />
      ))}
    </Box>
  );
};

export default ProjectsList;

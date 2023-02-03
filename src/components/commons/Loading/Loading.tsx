import { ActivityIndicator } from 'react-native';
import Box from '../../designSystem/Box/Box';

export const Loading = () => (
  <Box flex={1} alignItems="center" justifyContent="center">
    <ActivityIndicator size="large" />
  </Box>
);

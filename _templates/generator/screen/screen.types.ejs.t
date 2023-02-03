---
to: "<%= hasTypes === 'yes' ? `src/components/screens/${repo}/${name}/${name}.types.tsx` : null %>"
---
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ConnectedBottomTabParamsList } from '../../../navigation/ConnectedBottomTab/ConnectedBottomTab.types';

export type SettingsScreenProps = NativeStackScreenProps<
  ConnectedBottomTabParamsList,
  '<%= name %>'
>;

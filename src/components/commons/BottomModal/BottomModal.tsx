import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import { forwardRef, useMemo } from 'react';
import { BottomModalProps } from './BottomModal.types';
import { Theme } from '../../../utils/theme/theme';
import Box from '../../designSystem/Box/Box';

const BottomModal = forwardRef<BottomSheetModal, BottomModalProps>(
  ({ children, snapPoints, ...rest }, ref) => {
    const theme = useTheme<Theme>();

    const initialSnapPoints = useMemo(() => ['50%'], []);

    const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
      useBottomSheetDynamicSnapPoints(initialSnapPoints);

    return (
      <BottomSheetModal
        {...{ ref }}
        index={0}
        snapPoints={snapPoints || animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        enableDismissOnClose
        backgroundStyle={{
          backgroundColor: theme.colors.surface,
        }}
        handleStyle={{
          backgroundColor: theme.colors.surface,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.textSubdued,
          width: 40,
        }}
        {...rest}>
        <BottomSheetView testID="bottomSheet" onLayout={handleContentLayout}>
          <Box flex={1} backgroundColor="surface">
            {children}
          </Box>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default BottomModal;

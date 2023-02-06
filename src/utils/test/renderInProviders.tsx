import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { render } from '@testing-library/react-native';
import { ReactNode } from 'react';
import getTheme from '../theme/theme';
import configureStore from '../../store/configureStore';

const { store, persistor } = configureStore();

const renderInProviders = (children: ReactNode) => {
  return render(
    <StoreProvider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <ThemeProvider theme={getTheme()}>
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </ThemeProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default renderInProviders;

import { QueryClient, QueryClientProvider } from 'react-query';
import configureStore from './src/store/configureStore';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/components/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// @ts-ignore
import { connectToDevTools } from 'react-devtools-core';

import './src/utils/i18n/i18n';
import './src/utils/sentry';

const App = () => {
  const { store, persistor } = configureStore();
  const queryClient = new QueryClient();

  if (__DEV__) {
    connectToDevTools({
      host: 'localhost',
      port: 8097,
    });
  }

  return (
    <StoreProvider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </QueryClientProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;

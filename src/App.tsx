import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Store } from './store';
import { StripeProvider } from '@stripe/stripe-react-native';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  

  // Define the config
  const config = {
    useSystemColorMode: true,
    initialColorMode: "dark",
  };

  // extend the theme
  const customTheme = extendTheme({ config });
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider theme={customTheme}>
        <SafeAreaProvider>
          <Provider store={Store}>
            <Navigation />
          </Provider>
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}

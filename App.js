import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigations/app.naviagtion';
import { setCustomText } from 'react-native-global-props';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './src/redux/store';

const App = () => {
  return (
    <>  
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </PersistGate>
    </>
  );
};

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Tomorrow-Thin' : 'Tomorrow-thin',
    color: 'black'
  }
};
setCustomText(customTextProps);

export default App;

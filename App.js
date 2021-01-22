import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Provider } from "react-redux"
import AppLoading from 'expo-app-loading';
import configureStore from "./src/store/Index"
import AppContainer from "./src/components/AppContainer/AppContainer"

const store = configureStore()

const App = () => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      WorkSans_500Medium: require("./assets/fonts/WorkSans_500Medium.ttf"),
      WorkSans_600SemiBold: require("./assets/fonts/WorkSans_600SemiBold.ttf"),
      WorkSans_100Thin: require("./assets/fonts/WorkSans_100Thin.ttf"),
    }).then(() => setIsReady(true));
  }, []);

  if (!isReady) { return <AppLoading /> } else {

    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    )
  }
};

export default App;
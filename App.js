import React from 'react';
import { Provider } from "react-redux"
import AppLoading from 'expo-app-loading';
import configureStore from "./src/store/Index"
import { useFonts, WorkSans_500Medium, WorkSans_600SemiBold, WorkSans_100Thin } from '@expo-google-fonts/work-sans';
import AppContainer from "./src/components/AppContainer/AppContainer"

const store = configureStore()

const App = () => {

  let [fontsLoaded] = useFonts({ WorkSans_500Medium, WorkSans_600SemiBold, WorkSans_100Thin })

  if (!fontsLoaded) { return <AppLoading /> } else {

    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    )
  }
};

export default App;
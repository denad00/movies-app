import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import Header from './src/components/layout/Header';
import AppStack from './src/components/stacks/AppStack';
import Tabs from './src/components/tabs/Tabs';

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      {/* <Header /> */}
      {/* <Tabs /> */}
      <StatusBar style="light " />
    </NativeBaseProvider>
  );
}

export default App

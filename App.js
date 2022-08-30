import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
      </GestureHandlerRootView>    
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}



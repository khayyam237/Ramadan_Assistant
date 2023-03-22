
import { StyleSheet,Text,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "./screens/HomeScreen";
import ZakatCalculator from "./screens/JakatCalculator2";
import Payment from "./screens/Payment";

const Stack=createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} /> 
         <Stack.Screen name="ZakatCalculator" component={ZakatCalculator}/>
         <Stack.Screen name="Payment" component={Payment}/>
      </Stack.Navigator>       
    </NavigationContainer>   
      );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

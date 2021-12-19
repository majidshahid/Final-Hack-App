import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import BranchManager from './Screens/BranchManager';
import ManageScreen from './Screens/ManageScreen';
import map from './Screens/map';
import ScanScreen from "./Screens/ScanScreen"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  
        <Stack.Screen options={{headerShown:false}} name="LOGIN" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="map" component={map} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="BranchManager" component={BranchManager} />
        <Stack.Screen name="MngScreen" component={ManageScreen} />
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

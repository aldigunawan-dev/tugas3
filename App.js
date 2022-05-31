import * as React from 'react';
import SearchScreen from './screen/searchScreen.js'
import ResultScreen from './screen/resultScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='SearchScreen' screenOptions={{headerShown: false}}>
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
}

export default App;
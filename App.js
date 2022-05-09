import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './services/navigationServices';
import CameraView from './components/views/cameraView';
import MainView from './components/views/mainScreen';
import UploadImage from './components/views/uploadPicture';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        hidden
        translucent
        backgroundColor="blue"
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName="Image Caption Generator"
        screenOptions={{
          gestureEnabled: false,
          headerMode: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="Image Caption Generator" component={UploadImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

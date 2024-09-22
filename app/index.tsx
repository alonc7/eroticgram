import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './Navigation/Drawer/DrawerNavigation'; // Your Drawer with Feed
import LoginForm from './screens/login';
import SignUPForm from './screens/signUp';
import SplashScreenComponent from './screens/SplashScreenComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {/* Splash Screen */}
      <Stack.Screen name="Splash" component={SplashScreenComponent} />
      {/* Login & Sign Up Screens */}
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="SignUp" component={SignUPForm} />
      {/* Drawer with Feed and Bottom Tabs */}
      <Stack.Screen name="FeedDrawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

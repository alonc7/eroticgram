import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '@/app/screens/feed';
import AccountScreen from '@/app/screens/accountScreen';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import SignUpForm from '@/app/screens/signUp';
import LoginForm from '@/app/screens/login';
import BottomTabNavigation from './TabNavigation/TabNavigation';
export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        drawerType: 'back',
        drawerStyle: { backgroundColor: theme.colors.background, width: 240 },
        drawerActiveTintColor: theme.colors.roseLight,
        drawerInactiveTintColor: theme.colors.rose,
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold', color: theme.colors.text },
        headerShown: true,
        headerBackground: () => (
          <LinearGradient colors={[theme.colors.rose, theme.colors.roseLight]} style={{ height: '100%' }} />
        ),
      }}
    >
      <Drawer.Screen
        name="EroticGram"
        component={BottomTabNavigation}
        options={{
          drawerLabel: 'Feed',
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />

      {/* Account Screen */}
      <Drawer.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          drawerLabel: 'Account',
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} accessibilityLabel="Account" />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign-up"
        component={SignUpForm}
        options={{
          drawerLabel: 'Sign-up',
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add" size={24} color={color} accessibilityLabel="Sign-up" />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginForm}
        options={{
          drawerLabel: 'Login',
          drawerIcon: ({ color }) => (
            <Ionicons name="log-in" size={24} color={color} accessibilityLabel="Login" />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}

// Styles for DrawerNavigation
const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.secondary, // Background color
    borderBottomColor: theme.colors.border, // Correct property for bottom border color
    borderBottomWidth: 4, // Correct property for border width
    height: '100%',
  },
  drawer: {
    backgroundColor: theme.colors.background, // Light grey background

    width: 240, // Width of the drawer
  },

  drawerLabel: {
    fontSize: 16, // Label font size
    fontWeight: 'bold', // Label font weight
    color: theme.colors.text,// Text color for labels
  },
});

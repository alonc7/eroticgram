import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '@/app/screens/feed';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import Plus from '@/assets/icons/Plus';
import AddPostScreen from '@/app/screens/AddPostScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Add Post') {
            iconName = 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.roseLight,
        tabBarInactiveTintColor: theme.colors.rose,
        headerShown: false, // Hide header if using drawer
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Add Post" component={AddPostScreen} />
    </Tab.Navigator>
  );
}

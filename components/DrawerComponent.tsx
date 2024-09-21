import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';
import { DrawerContentComponentProps } from '@react-navigation/drawer'; // Type for drawer props

interface MenuItem {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  screen?: string;
  action?: () => void;
}

const DrawerContent: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', screen: 'Feed' },
    { icon: 'person', label: 'Profile', screen: 'accountScreen' },
    { icon: 'settings', label: 'Settings', screen: 'Settings' },
    { icon: 'log-out', label: 'Logout', action: () => console.log('Logout') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menuItems.map((item, index) => (
        <Pressable
          key={index}
          style={styles.menuItem}
          onPress={() => item.screen ? navigation.navigate(item.screen as never) : item.action?.()}
        >
          <Ionicons name={item.icon} size={24} color={theme.colors.text} />
          <Text style={styles.menuItemText}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: hp(2),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.5),
  },
  menuItemText: {
    fontSize: 18,
    color: theme.colors.text,
    marginLeft: wp(3),
  },
});

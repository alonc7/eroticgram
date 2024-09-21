import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from '../Navigation/Drawer/DrawerNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TabsNavigation from '../Navigation/Tabs/TabNavigation';


export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DrawerNavigation />
        </GestureHandlerRootView>
    );
}
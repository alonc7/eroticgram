import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="@/feed" options={{ headerShown: false }} />
            <Stack.Screen name="@/login" options={{ headerShown: false }} />
            <Stack.Screen name="@/signUp" options={{ headerShown: false }} />
        </Stack>
    )
}

export default Layout

const styles = StyleSheet.create({})
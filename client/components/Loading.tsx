import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/Colors'

const Loading = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={"large"} color={theme.colors.primary} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({})
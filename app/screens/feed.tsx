import React from 'react'
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/constants/Colors'
import { hp } from '@/helpers/common'

export default function Feed() {
    const navigation = useNavigation()

    const feedItems = [
        { id: '1', title: 'First Post', content: 'This is the first post content.' },
        { id: '2', title: 'Second Post', content: 'This is the second post content.' },

    ]

    const handleNavigateToPersonalPage = () => {
        navigation.navigate('SignUp');
    }

    const handleOpenDrawer = () => {
        navigation.openDrawer()
    }

    const renderItem = ({ item }: { item: { id: string, title: string, content: string } }) => (
        <View key={item.id} style={styles.feedItem}>
            <Text style={styles.feedItemTitle}>{item.title}</Text>
            <Text style={styles.feedItemContent}>{item.content}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Pressable onPress={handleNavigateToPersonalPage} style={styles.iconButton}>
                    <Ionicons name="person" size={24} color={theme.colors.text} />
                </Pressable>
                <Text style={styles.title}>Feed</Text>
                <Pressable onPress={handleOpenDrawer} style={styles.iconButton}>
                    <Ionicons name="menu" size={24} color={theme.colors.text} />
                </Pressable>
            </View>
            <FlatList
                data={feedItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: hp(2),
        backgroundColor: theme.colors.primary,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    iconButton: {
        padding: hp(1),
    },
    flatListContent: {
        padding: hp(2),
    },
    feedItem: {
        marginBottom: hp(2),
        padding: hp(2),
        backgroundColor: theme.colors.secondary,
        borderRadius: 8,
    },
    feedItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.text,
    },
    feedItemContent: {
        fontSize: 16,
        color: theme.colors.text,
    },
});


import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import { theme } from '@/constants/Colors';

const AccountScreen = () => {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        profileImage: 'https://picsum.photos/200/300',
        stats: {
            posts: 120,
            followers: 2000,
            following: 500,
        },
        preferences: {
            darkMode: false,
            notifications: true,
            privateAccount: false,
        },
    });

    const handleEditProfile = () => {
        // setIsEditing(true);
        Alert.alert('Edit Profile', 'Navigate to edit profile screen');
    };

    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', onPress: () => console.log('User logged out') },
        ]);
    };

    const togglePreference = (preference) => {
        setUserData((prevData) => ({
            ...prevData,
            preferences: {
                ...prevData.preferences,
                [preference]: !prevData.preferences[preference],
            },
        }));
    };

    const renderStat = (label, value) => (
        <View style={styles.stat}>
            <Text style={styles.statNumber}>{value}</Text>
            <Text style={styles.statLabel}>{label}</Text>
        </View>
    );

    const renderPreference = (label, value, onToggle) => (
        <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>{label}</Text>
            <Switch
                value={value}
                onValueChange={onToggle}
                trackColor={{ false: theme.colors.neutral, true: theme.colors.accent1 }}
                thumbColor={value ? theme.colors.accent2 : theme.colors.text}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{userData.name}</Text>
                    <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                </View>

                {/* User Details */}
                <View style={styles.userDetails}>
                    <Text style={styles.userText}>Bio</Text>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    {renderStat('Posts', userData.stats.posts)}
                    {renderStat('Followers', userData.stats.followers)}
                    {renderStat('Following', userData.stats.following)}
                </View>

                {/* User Actions */}
                <View style={styles.actionsContainer}>
                    <Button
                        title="Edit Profile"
                        onPress={handleEditProfile}
                        style={styles.actionButton}
                        textStyle={styles.actionButtonText}
                    />
                    <Button
                        title="My Content"
                        onPress={() => Alert.alert('My Content', 'Navigate to user content')}
                        style={styles.actionButton}
                        textStyle={styles.actionButtonText}
                    />
                </View>

                {/* Preferences */}
                <View style={styles.preferencesContainer}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    {renderPreference('Dark Mode', userData.preferences.darkMode, () => togglePreference('darkMode'))}
                    {renderPreference('Notifications', userData.preferences.notifications, () => togglePreference('notifications'))}
                    {renderPreference('Private Account', userData.preferences.privateAccount, () => togglePreference('privateAccount'))}
                </View>

                {/* Logout Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        backgroundColor: theme.colors.secondary,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: theme.colors.text,
        marginBottom: 10,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: theme.colors.accent1,
    },
    userDetails: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    userText: {
        fontSize: 16,
        color: theme.colors.text,
        fontWeight: '500',
        marginVertical: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.neutral,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.accent2,
    },
    statLabel: {
        fontSize: 16,
        color: theme.colors.neutral,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    actionButton: {
        backgroundColor: theme.colors.accent1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: theme.radius.md,
    },
    actionButtonText: {
        color: theme.colors.text,
        fontWeight: 'bold',
        fontSize: 16,
    },
    preferencesContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: 10,
    },
    preferenceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    preferenceLabel: {
        fontSize: 16,
        color: theme.colors.text,
    },
    logoutButton: {
        backgroundColor: theme.colors.accent2,
        paddingVertical: 15,
        margin: 20,
        borderRadius: theme.radius.md,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: theme.colors.text,
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default AccountScreen;

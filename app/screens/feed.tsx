import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/Colors';
import { hp, wp } from '@/helpers/common';
import Post from '@/components/Post'; // Import the Post component
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';

export default function Feed() {
    // const navigation = useNavigation();
    const router = useRouter();
    // Sample data with enhanced structure for the Post component
    const feedItems = [
        {
            id: '1',
            user: {
                name: 'John Doe',
                username: 'johndoe',
                profilePicture: 'https://picsum.photos/200/300',
            },
            image: 'https://picsum.photos/200/300',
            caption: 'This is a sample caption for post 1.',
            likes: 123,
            comments: 45,
            date: '2024-08-10',
        },
        {
            id: '3',
            user: {
                name: 'John Doe',
                username: 'johndoe',
                profilePicture: 'https://picsum.photos/200/200', // Replace with actual image URL
            },
            image: 'https://placeimg.com/640/480/animals', // Replace with actual image URL
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!`,
            likes: 123,
            comments: 45,
            date: '2024-08-10',
        },
        {
            id: '4',
            user: {
                name: 'John Doe',
                username: 'johndoe',
                profilePicture: 'https://picsum.photos/200/500',
            },
            image: 'https://placeimg.com/640/480/animals', // Replace with actual image URL
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!`,
            likes: 123,
            comments: 45,
            date: '2024-08-10',
        },
        {
            id: '2',
            user: {
                name: 'Jane Smith',
                username: 'janesmith',
                profilePicture: 'https://picsum.photos/200/300', // Replace with actual image URL
            },
            image: 'https://placeimg.com/640/480/arch', // Replace with actual image URL
            caption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!`,
            likes: 567,
            comments: 89,
            date: '2024-08-09',
        },
    ];

    const handleNavigateToPersonalPage = () => {
        console.log("Noa , we got a problem. Tell Huston");

        // navigation.replace('accountScreen');
        router.push(`@/accountScreen`);

    };

    const handleOpenDrawer = () => {
        // navigation.dispatch(DrawerActions.openDrawer());
    };


    const renderItem = ({ item }) => (
        <Post key={item.id} {...item} /> // Pass post data as props to the Post component
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <View style={styles.container}>
                <FlatList
                    data={feedItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </KeyboardAvoidingView>

    );
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
        backgroundColor: theme.colors.secondary,
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


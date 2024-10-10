import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../Utils/Colors';

export default function Header() {

    const { user, isLoading } = useUser();

    return (
        <View style={styles.container}>

            {/* profile section  */}
            <View style={styles.profileMainContainer}>
                {/* user profile  */}
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }}
                        style={styles.userImage} />

                    {/* another view  */}
                    <View >
                        <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
                        <Text style={{
                            color: Colors.WHITE,
                            fontSize: 20,
                            fontFamily: 'outfit-medium',
                        }}
                        >{user?.fullName}</Text>
                    </View>
                </View>

                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            {/* end of profile section  */}

            {/* search bar section  */}
            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search'
                    style={styles.textInput} />

                <FontAwesome name="search"
                    style={styles.searchButton}
                    size={24} color={Colors.PRIMARY} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    profileMainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginBottom: 20
    },
    searchButton: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8,
    }
})
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import Colors from '../../Utils/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {

            }
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <View style={{ alignItems: 'center' }}>
            {/* image  */}
            <Image source={require('./../../../assets/login.png')}
                style={styles.loginImage}
            />
            {/* another view of login jsx  */}
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center', }}>
                    Let's Find
                    <Text style={{ fontWeight: 'bold', }}> Professional Cleaning and repair </Text>
                    Service
                </Text>
                <Text style={{ textAlign: 'center', color: Colors.WHITE, marginTop: 20, fontSize: 10, }}>
                    Best App to find services near you which deliver the professional service.
                </Text>

                {/* button  */}
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.PRIMARY, fontWeight: 'bold', }}>Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15,
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    button: {
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderRadius: 45,
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
    }
})
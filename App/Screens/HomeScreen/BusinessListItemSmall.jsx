import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall({ business }) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: business?.images?.url }}
                style={styles.image} />

            <View style={styles.infoContainer}>
                <Text style={{ fontSize: 17, fontFamily: 'outfit-medium' }}>{business?.name}</Text>
                <Text style={{
                    fontSize: 13, fontFamily: 'outfit',
                    color: Colors.GRAY,
                }}>{business?.contactPerson}</Text>
                <Text
                    style={{
                        fontSize: 10, fontFamily: 'outfit',
                        padding: 5, color: Colors.PRIMARY,
                        backgroundColor: Colors.PRIMARY_LIGHT,
                        borderRadius: 5,
                        alignSelf: 'flex-start'
                    }}>
                    {business?.category.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 100,
        borderRadius: 10,
    },
    container: {
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
    },
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 3,
    }
})
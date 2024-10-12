import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Heading({ text, isViewAll = false }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{text}</Text>
            {isViewAll && <Text>View All</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
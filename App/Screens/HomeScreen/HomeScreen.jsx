import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Slider from './Slider';

export default function HomeScreen() {
    return (
        <View>
            {/* Header  */}
            <Header />
            {/* Slider  */}
            <View style={{ padding: 20, }}>
                <Slider />
            </View>
        </View>
    )
}
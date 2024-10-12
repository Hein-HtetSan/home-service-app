import React from 'react';
import { View } from 'react-native';
import BusinessLists from './BusinessLists';
import Categories from './Categories';
import Header from './Header';
import Slider from './Slider';

export default function HomeScreen() {


    return (
        <View>
            {/* Header  */}
            <Header />
            {/* Slider  */}
            <View style={{ padding: 20, }}>
                {/* slider section  */}
                <Slider />
                {/* category section  */}
                <Categories />
                {/* business list section  */}
                <BusinessLists />
            </View>
        </View>
    )
}
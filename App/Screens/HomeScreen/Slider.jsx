import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';

export default function Slider() {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        getSliders();
    }, []);

    

    const getSliders = async () => {
        try {
            const resp = await GlobalApi.getSlider();
            console.log("resp", resp.sliders);
            setSlider(resp?.sliders);
        } catch (error) {
            console.error("Error fetching sliders:", error);
        }
    }

    return (
        <View>
            <Text style={styles.heading}>Offer For You</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight20, }}>
                        <Image source={{ uri: item?.image?.url }}
                            style={styles.sliderImage} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'contain',
    }
});
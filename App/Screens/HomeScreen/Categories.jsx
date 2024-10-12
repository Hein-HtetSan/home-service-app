import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import GlobalApi from '../../Utils/GlobalApi';

export default function Categories() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);



    const getCategories = async () => {
        try {
            const resp = await GlobalApi.getCategory();
            console.log("resp", resp.categories);
            setCategory(resp?.categories);
        } catch (error) {
            console.error("Error fetching sliders:", error);
        }
    }


    return (
        <View style={{ marginTop: 10, }}>
            <Heading text={"Categories"} isViewAll={true} />
            <FlatList
                data={category}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <View style={styles.container}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item?.icon?.url }}
                                style={styles.iconImage} />
                        </View>
                        <Text
                            style={{ fontFamily: 'outfit-medium', marginTop: 5, }}
                        >
                            {item?.name}
                        </Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99,
    },
    iconImage: {
        width: 30,
        height: 30,
    }
})

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Heading from '../../Components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessLists() {

    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        getBusinesses();
    }, []);

    const getBusinesses = async () => {
        try {
            const resp = await GlobalApi.getBusinessList();
            console.log("resp", resp?.businessLists);
            setBusinesses(resp?.businessLists);
        } catch (error) {
            console.error("Error fetching businesses:", error);
        }
    }

    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={"Latest Business"} isViewAll={true} />
            <FlatList
                data={businesses}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10, }}>
                        <BusinessListItemSmall business={item} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
})
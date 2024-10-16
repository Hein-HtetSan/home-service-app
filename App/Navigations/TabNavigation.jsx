import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native'; // 
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
// import the font icon
import { FontAwesome } from '@expo/vector-icons';
// import the color util
import Colors from '../Utils/Colors';


// init the tab
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY,
        }}>
            <Tab.Screen name='home' component={HomeScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='booking' component={BookingScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='bookmark' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name='profile' component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='user-circle' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
import React, { Component } from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../screens/Feed';
import CreatePostScreen from '../screens/CreatePost';

const Tab = createBottomTabNavigator()

const TabNavigator =()=>{
    return(
        <Tab.Navigator
            screenOptions = { ({route}) => ({
                tabBarIcon : ({focused , color , size}) => {
                    var iconName

                    if (route.name == "Feed") {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name == "Create") {
                        iconName = focused ? 'create' : 'create-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            }) }

            tabBarOptions = {{
                activeTintColor : 'black',
                inactiveTintColor : 'grey'
            }}
        >
            <Tab.Screen  name = "Feed" component={FeedScreen} />
            <Tab.Screen  name = "Create" component={CreatePostScreen} />
        </Tab.Navigator>
    )
}



export default TabNavigator







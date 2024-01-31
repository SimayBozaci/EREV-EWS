import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';

import {AboutScreen, HomeScreen, ProductsScreen} from '.';

const NewTab = createBottomTabNavigator();

const TabsNew = () => {
  return (
    <NewTab.Navigator>
      <NewTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/İcons/homepage.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <NewTab.Screen
        name="Product"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/İcons/product-29.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <NewTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/İcons/abouutt.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'black' : 'black',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </NewTab.Navigator>
  );
};

export default TabsNew;

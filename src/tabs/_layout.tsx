import React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import OrderScreen from './OrderScreen';
import ProfileScreen from './ProfileScreen';

import icons from '../../constants/icons';
import { s, vs } from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

type IconName = keyof typeof icons;
type TabConfigKey = 'Home' | 'Explore' | 'Orders' | 'Profile';

type TabConfig = {
  [K in TabConfigKey]: {
    component: () => React.ReactElement;
    icons: {
      focused: IconName;
      default: IconName;
    };
  };
};

const tabConfig: TabConfig = {
  Home: {
    component: HomeScreen,
    icons: {
      focused: 'homeFill',
      default: 'home',
    },
  },
  Explore: {
    component: ExploreScreen,
    icons: {
      focused: 'searchFill',
      default: 'search',
    },
  },
  Orders: {
    component: OrderScreen,
    icons: {
      focused: 'orderFill',
      default: 'order',
    },
  },
  Profile: {
    component: ProfileScreen,
    icons: {
      focused: 'profileFill',
      default: 'profile',
    },
  },
};

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          minHeight: vs(70),
        },
        tabBarIcon: ({ focused, color }) => {
          const iconName = focused
            ? tabConfig[route.name as TabConfigKey].icons.focused
            : tabConfig[route.name as TabConfigKey].icons.default;

          return (
            <Image
              source={icons[iconName]}
              style={{
                width: vs(28),
                height: vs(28),
                marginTop: vs(16),
                tintColor: focused ? '#22A45D' : color,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              textAlign: 'center',
              color: focused ? '#22A45D' : '#757575',
              marginTop: vs(10),
              fontSize: s(10),
              fontWeight: focused ? '600' : '400',
            }}>
            {route.name}
          </Text>
        ),
      })}>
      {Object.entries(tabConfig).map(([name, { component }]) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabsLayout;

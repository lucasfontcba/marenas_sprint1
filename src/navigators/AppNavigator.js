import React from 'react'
import { StatusBar, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import ReserveNavigator from "./ReserveNavigator"
import TravelsNavigator from "./TravelsNavigator"
import NotificationsNavigator from "./NotificationsNavigator"
import ProfileNavigator from "./ProfileNavigator"

import IconBell from "../../assets/Icons/concierge-bell-solid"
import IconPlane from "../../assets/Icons/plane-departure-solid"
import IconFlag from "../../assets/Icons/flag-solid"
import IconUser from "../../assets/Icons/user-alt-solid"

import GlobalStyles from '../theme/GlobalStyles';



const Tab = createBottomTabNavigator()

const AppNav = () => {

    function screenOptions(route, color) {

        const style = {
            icon: {
                width: 22,
                height: 22,
                fill: color !== GlobalStyles.colorSet.heroBack ? "white" : "#989898"
            },
            view: {
                flex: 1,
                backgroundColor: color !== GlobalStyles.colorSet.heroBack ? color : "transparent",
                width: 35,
                height: 50,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                bottom: color !== GlobalStyles.colorSet.heroBack ? 0 : 0
            },
        }

        switch (route.name) {
            case "travels": return <View style={style.view}><IconPlane style={style.icon} /></View>
            case "notifications": return <View style={style.view}><IconFlag style={style.icon} /></View>
            case "reserve": return <View style={style.view}><IconBell style={style.icon} /></View>
            case "profile": return <View style={style.view}><IconUser style={style.icon} /></View>
            default:
        }
    }

    return (
        <NavigationContainer >
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <Tab.Navigator
                initialRouteName="reserve"
                tabBarOptions={{
                    activeTintColor: GlobalStyles.colorSet.hero,
                    inactiveTintColor: GlobalStyles.colorSet.heroBack,
                    style: { zIndex: 1 }
                }}
                screenOptions={({ route }) => ({ tabBarIcon: ({ color }) => screenOptions(route, color) })}
            >
                <Tab.Screen name="reserve" component={ReserveNavigator} options={{ title: "Reserva" }} />
                <Tab.Screen name="travels" component={TravelsNavigator} options={{ title: "Viajes" }} />
                <Tab.Screen name="notifications" component={NotificationsNavigator} options={{ title: "notificaciones" }} />
                <Tab.Screen name="profile" component={ProfileNavigator} options={{ title: "perfil" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default AppNav
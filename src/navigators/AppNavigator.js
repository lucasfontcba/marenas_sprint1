import React from 'react'
import { StatusBar, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { connect } from "react-redux"

import ReserveStack from "./ReserveStack"
import TravelsStack from "./TravelsStack"
import NotificationsStack from "./NotificationsStack"
import ProfileStack from "./ProfileStack"

import IconBell from "../../assets/Icons/concierge-bell-solid"
import IconPlane from "../../assets/Icons/plane-departure-solid"
import IconFlag from "../../assets/Icons/flag-solid"
import IconUser from "../../assets/Icons/user-alt-solid"


const Tab = createBottomTabNavigator()

const mapStateToProps = (state) => {
    return {
        app: state.app,
        text: state.text,
        styles: state.styles
    }
}

const AppNav = (props) => {

    const colorA = props.styles.colors.pink
    const colorB = props.styles.colors.gray

    const text = props.text
    const lang = props.app.lang

    function screenOptions(route, color) {

        const style = {
            icon: {
                width: 22,
                height: 22,
                fill: color !== colorB ? "white" : "#989898"
            },
            view: {
                flex: 1,
                backgroundColor: color !== colorB ? color : "transparent",
                width: 35,
                height: 50,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                bottom: color !== colorB ? 0 : 0
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
                    activeTintColor: colorA,
                    inactiveTintColor: colorB,
                    style: { zIndex: 1 },

                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)


                })}
            >

                <Tab.Screen name="reserve" component={ReserveStack} options={{ title: text.b001[lang] }} />
                <Tab.Screen name="travels" component={TravelsStack} options={{ title: text.b002[lang] }} />
                <Tab.Screen name="notifications" component={NotificationsStack} options={{ title: text.b003[lang] }} />
                <Tab.Screen name="profile" component={ProfileStack} options={{ title: text.b004[lang] }} />

            </Tab.Navigator>
        </NavigationContainer>

    )

}



export default connect(mapStateToProps)(AppNav)
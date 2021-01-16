import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Notifications from "../screens/notifications/Notifications"


const Stack = createStackNavigator()

export default function NotificationsStack() {
    return (
        <Stack.Navigator headerMode={"none"} >
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ title: "Notificaciones" }}
            />

        </Stack.Navigator>

    )

}

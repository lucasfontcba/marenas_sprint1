import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Reserve from "../screens/reserve/Reserve"


const Stack = createStackNavigator()

export default function ReserveNavigator() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen
                name="Reserve"
                component={Reserve}
                options={{ title: "Reservar" }}
            />

        </Stack.Navigator>

    )

}

import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Travels from "../screens/travels/Travels"


const Stack = createStackNavigator()

export default function TravelsNavigator() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen
                name="Travels"
                component={Travels}
                options={{ title: "Mis viajes" }}
            />

        </Stack.Navigator>

    )

}

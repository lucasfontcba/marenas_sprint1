import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import SignIn from "../screens/registry/SignIn"


const Stack = createStackNavigator()

export default function RegistroStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen
                name="registro"
                component={SignIn}
                options={{ title: "Registro" }}
            />

        </Stack.Navigator>
    )
}

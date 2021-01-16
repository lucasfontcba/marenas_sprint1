import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import Profile from "../screens/profile/Profile"


const Stack = createStackNavigator()

export default function PerfilStack() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{ title: "Perfil" }}
            />

        </Stack.Navigator>

    )

}

import React from 'react'
import { useDispatch } from "react-redux"
import { setSignInNav } from "../../store/actions/app"
import { View, Text, StatusBar } from "react-native"

import cs from "../../theme/CommonStyles"
import Svg from "../../../assets/svg/check.svg"

const NewPasswoedOk = () => {

    const dispatch = useDispatch()

    return (
        <View style={cs.viewHero} onTouchEnd={() => dispatch(setSignInNav(false))}>
            <StatusBar translucent={true} barStyle="light-content" />
            <Svg />
            <Text style={cs.titleWhite} >¡Contraseña</Text>
            <Text style={cs.titleWhite} >actualizada!</Text>

        </View >

    )
}

export default NewPasswoedOk


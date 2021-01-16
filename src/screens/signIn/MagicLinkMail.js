import React from 'react'
import { useDispatch } from "react-redux"
import { View, Text, StatusBar } from "react-native"
import { setSignInNav } from "../../store/actions/app"
import BttnSolid from "../../theme/components/BttnSolid"

import cs from "../../theme/CommonStyles"
import SvgManija from "../../../assets/svg/signin_manija"

const MagicLink = () => {

    const dispatch = useDispatch()

    return (
        <View style={cs.viewBack}>
            <StatusBar translucent={true} barStyle="light-content" />
            <SvgManija />
            <Text style={[cs.titleWhite, { marginBottom: 20 }]} >Hola Roberto</Text>
            <Text style={cs.textWhite} >Te enviamos un enlace mágico </Text>
            <Text style={cs.textWhite} > para ingresar más fácil y</Text>
            <Text style={cs.textWhite} > rápido a tu cuenta</Text>
            <BttnSolid title="Ingresar a Marenas" onPress={() => { dispatch(setSignInNav(false)) }} />

        </View >

    )
}

export default MagicLink


import React from 'react'
import { useDispatch } from "react-redux"
import { View, StyleSheet, Image, StatusBar, Text } from "react-native"
import BttnSolid from "../../theme/components/BttnSolid"

import { setSignInNav } from "../../store/actions/app"
import Svg from "../../../assets/svg/profile_userback"
import IconUser from "../../../assets/Icons/user-alt-solid"

import cs from "../../theme/CommonStyles"


const Profile = (props) => {

    const dispatch = useDispatch()

    return (
        <View style={cs.viewWhite}>
            <StatusBar translucent={true} barStyle="light-content" />
            <Image style={cs.imageTop} source={require("../../../assets/sea.png")} />
            <View style={{ width: 93, height: 93, justifyContent: "center", alignItems: "center" }} >
                <Svg style={{ position: "absolute", width: 93, height: 93, left: -54 }} />
                <IconUser style={{ position: "absolute", width: 42, height: 42, bottom: 35 }} fill={"white"} />
            </View>
            <Text style={cs.titleBack} >Ingresá para ver tu información</Text>
            <Text style={cs.titleBack} >y compartir tu código de amigos</Text>
            <BttnSolid title="Ingresar" onPress={() => dispatch(setSignInNav(true))} />
            <Text style={[cs.textBack, styles.text]} >¿Todavía no eres cliente de Marenas?</Text>
            <Text style={[cs.linkHero, styles.register]} onPress={() => (dispatch(setSignInNav(true)))} >Regístrate</Text>

        </View>

    )
}

export default Profile

const styles = StyleSheet.create({
    titleWhite: {
        bottom: 30,
    },
    text: {
        position: "absolute",
        bottom: 50,
    },
    register: {
        position: "absolute",
        bottom: 25,
        textDecorationLine: 'underline',
    },
})
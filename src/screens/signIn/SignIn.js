import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from "react-native"
import BttnBorder from "../../theme/components/BttnBorder"
import BttnBack from "../../theme/components/BttnBack"

import { useDispatch } from "react-redux"
import { setSignInNav } from "../../store/actions/app"

import cs from "../../theme/CommonStyles"

const SignIn = (props) => {

    const dispatch = useDispatch()

    return (
        <View style={[cs.viewBack]} >

            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <BttnBack onPress={() => dispatch(setSignInNav(false))} />
            <Text style={[cs.titleWhite, styles.titleWhite]} >Ingresar con</Text>
            <BttnBorder title="Google" icon="google" onPress={() => props.navigation.navigate('Welcome')} />
            <BttnBorder title="Facebook" icon="facebook" onPress={() => props.navigation.navigate('Welcome')} />
            <BttnBorder title="Apple ID" icon="apple" onPress={() => props.navigation.navigate('Welcome')} />
            <BttnBorder title="Mail" icon="mail" onPress={() => props.navigation.navigate('SignInMail')} />
            <Text style={[cs.textWhite, styles.text]} >¿Todavía no eres cliente de Marenas?</Text>
            <Text style={[cs.linkHero, styles.register]} onPress={() => props.navigation.navigate('SignUp')} >Regístrate</Text>

        </View >
    )
}

export default SignIn;

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
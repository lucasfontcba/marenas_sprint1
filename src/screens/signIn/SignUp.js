import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"
import BttnBorder from "../../theme/components/BttnBorder"
import BttnBack from "../../theme/components/BttnBack"
import Title from "../../theme/components/Title"

import { useDispatch } from "react-redux"
import { setSignInNav } from "../../store/actions/app"

import cs from "../../theme/CommonStyles"

const SignUp = (props) => {

    const dispatch = useDispatch()

    return (
        <View style={cs.viewBack}>

            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />

            <BttnBack onPress={() => dispatch(setSignInNav(false))} />
            <Title text="Registrarme con" />
            <BttnBorder title="Google" icon="google" />
            <BttnBorder title="Facebook" icon="facebook" />
            <BttnBorder title="Apple ID" icon="apple" />
            <BttnBorder title="Mail" icon="mail" onPress={() => props.navigation.navigate('SignUpMail')} />
            <Text style={[cs.textWhite, styles.text]} >¿Ya tienes un usuario?</Text>
            <Text style={[cs.linkHero, styles.link]} onPress={() => props.navigation.navigate('SignIn')} >Inicia sesión</Text>

        </View >

    )

}

export default SignUp

const styles = StyleSheet.create({

    text: {
        position: "absolute",
        bottom: 50,
    },
    link: {
        position: "absolute",
        bottom: 25,
    },

})


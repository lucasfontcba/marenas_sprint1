import React from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import BttnSolid from "../../theme/components/BttnSolid"
import BttnBorder from "../../theme/components/BttnBorder"
import TextInputIcon from "../../theme/components/TextInputIcon"
import GlobalStyles from '../../theme/GlobalStyles'

import cs from "../../theme/CommonStyles"

const SignInMail = (props) => {

    const [emailValue, setEmailValue] = React.useState("")
    const [passwordValue, setPasswordValue] = React.useState("")
    const [alert, setAlert] = React.useState("")

    function validate() {
        const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordVal = /^(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{6,50})$/

        if (!emailVal.test(emailValue) || !passwordVal.test(passwordValue)) {
            setAlert("Alguno de los datos es incorrecto, vuelve a intentarlo.")
        } else {
            props.navigation.navigate('MailConfirmMissing')
        }
    }

    return (

        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={cs.viewWhite}>

            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <BttnBack onPress={() => props.navigation.navigate('SignIn')} fill="black" />

            <Text style={cs.titleBack} >Ingresa con tu </Text>
            <Text style={cs.titleBack} >mail y contraseña</Text>
            <TextInputIcon placeholder={"Correo electrónico"} onFocus={() => setAlert("")} alert={alert !== ""} onChangeText={e => setEmailValue(e)} icon="mail" mail />
            <TextInputIcon placeholder={"Contraseña"} onFocus={() => setAlert("")} alert={alert !== ""} onChangeText={e => setPasswordValue(e)} icon="key" password />
            {alert !== "" && <Text style={cs.textHero} >{alert}</Text>}
            <BttnSolid title="Ingresar" onPress={() => validate()} />
            <Text style={[cs.textBackBold, styles.remember]} onPress={() => props.navigation.navigate('PasswordRecover')} >No recuerdo mi contraseña</Text>
            <Text style={cs.textBack} >o ingresar con</Text>
            <BttnBorder title="Enlace Mágico" titleColor="hero" onPress={() => props.navigation.navigate('MagicLink')} />
            <Text style={[cs.textBack, styles.textBottom]} >¿Todavía no eres cliente de Marenas?</Text>
            <Text style={[cs.linkHero, styles.register]} onPress={() => (dispatch(setSignInNav(true)))} >Regístrate</Text>

        </KeyboardAvoidingView>

    )

}

export default SignInMail

const styles = StyleSheet.create({

    textBottom: {
        position: "absolute",
        bottom: 50,
    },

    text2: {
        fontWeight: "700",
        color: "#004257",
    },
    register: {
        position: "absolute",
        bottom: 25
    },
    remember: {
        textDecorationLine: 'underline',
        marginTop: 24
    },

})

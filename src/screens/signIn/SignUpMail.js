import React from 'react'
import { KeyboardAvoidingView, Text, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import BttnSolid from "../../theme/components/BttnSolid"
import TextInputIcon from "../../theme/components/TextInputIcon"

import cs from "../../theme/CommonStyles"

const SignInMail = (props) => {

    const [nameValue, setNameValue] = React.useState("")
    const [emailValue, setEmailValue] = React.useState("")
    const [passwordValue, setPasswordValue] = React.useState("")

    const [alertName, setAlertName] = React.useState("")
    const [alertEmail, setAlertEmail] = React.useState("")
    const [alertPassword, setAlertPassword] = React.useState(false)

    function validate() {

        const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordVal = /^(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{6,50})$/
        const nameVal = /^[a-z ,.'-]+$/i

        if (emailVal.test(emailValue) && passwordVal.test(nameValue) && passwordVal.test(passwordValue)) {
            props.navigation.navigate('AccountConfirm')
        } else {
            !nameVal.test(nameValue) ? setAlertName("Nombre incorrecto") : setAlertName("")
            !emailVal.test(emailValue) ? setAlertEmail("Email incorrecto") : setAlertEmail("")
            !passwordVal.test(passwordValue) ? setAlertPassword(true) : setAlertPassword(false)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={cs.viewWhite}>

            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <BttnBack onPress={() => props.navigation.navigate('SignUp')} fill="black" />

            <Text style={cs.titleHero} >Hola!</Text>
            <Text style={cs.titleBack} >Ingresa tus datos para</Text>
            <Text style={cs.titleBack} >crear tu cuenta Marenas</Text>
            <TextInputIcon placeholder={"Nombre y Apellido"} onFocus={() => setAlertName("")} alert={alertName !== ""} onChangeText={e => setNameValue(e)} icon="signature" />
            {alertName !== "" && <Text style={cs.textHero} >{alertName}</Text>}
            <TextInputIcon placeholder={"Correo electrónico"} onFocus={() => setAlertEmail("")} alert={alertEmail !== ""} onChangeText={e => setEmailValue(e)} icon="mail" />
            {alertEmail !== "" && <Text style={cs.textHero} >{alertEmail}</Text>}
            <TextInputIcon placeholder={"Contraseña"} onFocus={() => setAlertPassword(false)} alert={alertPassword} onChangeText={e => setPasswordValue(e)} icon="key" password mail />
            <Text style={alertPassword ? cs.textHero : cs.textBack} >Al menos 6 caracteres,</Text>
            <Text style={alertPassword ? cs.textHero : cs.textBack} >1 mayúscula y 1 símbolo</Text>

            <BttnSolid title="Ingresar" onPress={() => validate()} />

        </KeyboardAvoidingView>
    )

}

export default SignInMail


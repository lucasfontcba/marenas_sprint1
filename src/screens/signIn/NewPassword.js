import React from 'react'
import { View, Text, StyleSheet, StatusBar } from "react-native"

import BttnBack from "../../theme/components/BttnBack"
import BttnSolid from "../../theme/components/BttnSolid"
import TextInputIcon from "../../theme/components/TextInputIcon"

import cs from "../../theme/CommonStyles"

const NewPassword = (props) => {


    const [passwordValue, setPasswordValue] = React.useState("")
    const [alertPassword, setAlertPassword] = React.useState(false)

    function validate() {

        const passwordVal = /^(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])(.{6,50})$/
        passwordVal.test(passwordValue) ? props.navigation.navigate('NewPasswordOk') : setAlertPassword(true)
    }

    return (
        <View style={cs.viewWhite}>

            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
            <BttnBack onPress={() => props.navigation.navigate('SignInMail')} fill="black" />

            <Text style={cs.titleBack} >Crea una nueva</Text>
            <Text style={cs.titleBack} >contraseña</Text>
            <TextInputIcon placeholder={"Contraseña"} onFocus={() => setAlertPassword(false)} alert={alertPassword} onChangeText={e => (setPasswordValue(e), setAlertPassword(false))} icon="key" password />
            <Text style={alertPassword ? cs.textHero : cs.textBack} >Al menos 6 caracteres,</Text>
            <Text style={alertPassword ? cs.textHero : cs.textBack} >1 mayúscula y 1 símbolo</Text>
            <BttnSolid title="Enviar" onPress={() => validate()} />

        </View >

    )

}

export default NewPassword


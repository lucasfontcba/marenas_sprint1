import React from 'react'
import { View, Text, StatusBar, Image } from "react-native"
import { useDispatch } from "react-redux"
import { setSignInNav } from "../../store/actions/app"
import { setLogin } from "../../store/actions/user"
import BttnBack from "../../theme/components/BttnBack"

import Logo from "../../../assets/svg/marenas_anagram"

import cs from "../../theme/CommonStyles"

const Welcome = (props) => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        setTimeout(() => { dispatch(setLogin(true)), dispatch(setSignInNav(false)) }, 2000)
    }, [])

    return (
        <View style={cs.viewBack}>
            <StatusBar translucent={true} barStyle="light-content" />
            <BttnBack onPress={() => props.navigation.navigate('SignIn')} fill="white" />
            <Image style={cs.imageFull} source={require("../../../assets/welcome.png")} />

            <Text style={[cs.titleThinWhite]} >Bienvenido</Text>
            <Text style={cs.titleThinWhite} >a</Text>
            <Text style={cs.titleWhite} >Marenas</Text>
            <Logo style={{ marginTop: 30 }} />

        </View >
    )
}

export default Welcome


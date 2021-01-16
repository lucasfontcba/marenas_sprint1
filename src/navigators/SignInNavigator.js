import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { setLogin } from "../store/actions/user"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import SignIn from "../screens/signIn/SignIn"
import SignInMail from "../screens/signIn/SignInMail"

import SignUp from "../screens/signIn/SignUp"
import SignUpMail from "../screens/signIn/SignUpMail"
import AccountConfirm from "../screens/signIn/AccountConfirm"
import MagicLink from "../screens/signIn/MagicLink"
import Welcome from "../screens/signIn/Welcome"
import PasswordRecover from "../screens/signIn/PasswordRecover"
import MailConfirmMissing from "../screens/signIn/MailConfirmMissing"
import NotRegisteredYet from "../screens/signIn/NotRegisteredYet"
import MagicLinkMail from "../screens/signIn/MagicLinkMail"
import MailConfirm from "../screens/signIn/MailConfirm"
import NewPassword from "../screens/signIn/NewPassword"
import NewPasswordOk from "../screens/signIn/NewPasswordOk"


const Stack = createStackNavigator()

const mapDispatchToProps = (dispatch) => { return { setLogin: (data) => dispatch(setLogin(data)) } }
const mapStateToProps = (state) => {
    return {
        app: state.app,
        text: state.text,
        styles: state.styles
    }
}

const SignInNav = (props) => {

    const screenOptions = {
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS

    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" >
                <Stack.Screen name="SignIn" component={SignIn} options={screenOptions} />
                <Stack.Screen name="SignInMail" component={SignInMail} options={screenOptions} />
                <Stack.Screen name="SignUp" component={SignUp} options={screenOptions} />
                <Stack.Screen name="SignUpMail" component={SignUpMail} options={screenOptions} />
                <Stack.Screen name="AccountConfirm" component={AccountConfirm} options={screenOptions} />
                <Stack.Screen name="MailConfirm" component={MailConfirm} options={screenOptions} />
                <Stack.Screen name="MagicLink" component={MagicLink} options={screenOptions} />
                <Stack.Screen name="MagicLinkMail" component={MagicLinkMail} options={screenOptions} />
                <Stack.Screen name="Welcome" component={Welcome} options={screenOptions} />
                <Stack.Screen name="PasswordRecover" component={PasswordRecover} options={screenOptions} />
                <Stack.Screen name="MailConfirmMissing" component={MailConfirmMissing} options={screenOptions} />
                <Stack.Screen name="NotRegisteredYet" component={NotRegisteredYet} options={screenOptions} />
                <Stack.Screen name="NewPassword" component={NewPassword} options={screenOptions} />
                <Stack.Screen name="NewPasswordOk" component={NewPasswordOk} options={screenOptions} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}


export default connect(mapStateToProps, mapDispatchToProps)(SignInNav)
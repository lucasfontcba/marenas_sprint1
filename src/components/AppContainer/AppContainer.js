import React from 'react'
import { useSelector } from "react-redux"
import SignInNav from "../../navigators/SignInNavigator"
import AppNav from "../../navigators/AppNavigator"

const Index = () => {

    const app = useSelector(state => state.app)

    return !app.signInNav ? <AppNav /> : <SignInNav />
}

export default Index
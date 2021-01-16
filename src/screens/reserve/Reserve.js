import React from 'react'
import { View, StatusBar, Image } from "react-native"

import cs from "../../theme/CommonStyles"

export default function Reserve() {
    return (
        <View style={cs.viewWhite}>
            <StatusBar translucent={true} barStyle="dark-content" />
            <Image style={cs.imageBottom} source={require("../../../assets/reserve.png")} />

        </View>

    )
}
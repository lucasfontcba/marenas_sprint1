
import React, { Suspense } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GlobalStyles from '../GlobalStyles';

const Apple = React.lazy(() => import('../../../assets/Icons/apple.svg'))
const Facebook = React.lazy(() => import('../../../assets/Icons/facebook-f.svg'))
const Google = React.lazy(() => import('../../../assets/Icons/google-plus.svg'))
const Mail = React.lazy(() => import('../../../assets/Icons/at-solid.svg'))

export default function BttnBorder({ title, onPress, style = {}, icon = false, titleColor = "white" }) {

    const LocalStyles = StyleSheet.create({

        bttn: {
            borderColor: GlobalStyles.colorSet.hero,
            backgroundColor: "transparent",
            borderWidth: 1,
            width: 224,
            height: 48,
            borderRadius: 20,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: "center"
        },
        text: {
            fontFamily: GlobalStyles.fontSet.Regular,
            color: titleColor === "hero" ? GlobalStyles.colorSet.hero : !titleColor ? "white" : titleColor,
            fontSize: 16,
            textAlign: "center",
            textAlignVertical: "center"
        },
        iconView: {
            position: 'absolute',
            left: 10,
            width: 22,
            height: 22
        }

    })

    return (
        <TouchableOpacity onPress={onPress} style={[LocalStyles.bttn, style]} >

            {icon &&
                <Suspense fallback={<Text></Text>} >
                    <View style={LocalStyles.iconView}>
                        {icon === "apple" && <Apple fill={"white"} />}
                        {icon === "facebook" && <Facebook fill={"white"} />}
                        {icon === "google" && <Google fill={"white"} />}
                        {icon === "mail" && <Mail fill={"white"} />}
                    </View>
                </Suspense>
            }

            <Text style={LocalStyles.text}>{title}</Text>

        </TouchableOpacity>
    )
}
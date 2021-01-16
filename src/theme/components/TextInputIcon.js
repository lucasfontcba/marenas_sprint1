
import React, { Suspense } from 'react'
import { Text } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native';
import GlobalStyles from '../GlobalStyles';

const Key = React.lazy(() => import("../../../assets/Icons/key-solid.svg"))
const Mail = React.lazy(() => import("../../../assets/Icons/at-solid.svg"))
const Signature = React.lazy(() => import("../../../assets/Icons/signature-solid.svg"))
const Eye = React.lazy(() => import("../../../assets/Icons/eye.svg"))

export default function TextInputIcon({ placeholder, icon = false, fill, password = false, mail = false, onChangeText, onFocus, alert = false }) {

    const [textInputCondition, setTextInputCondition] = React.useState(false)

    const [viewPassword, setViewPassword] = React.useState(false)

    const LocalStyles = StyleSheet.create({

        view: {
            borderColor: alert ? GlobalStyles.colorSet.hero : textInputCondition === "blur" ? "black" : "transparent",
            backgroundColor: "#f3f4fc",
            color: "#003344",
            borderWidth: alert ? 2 : 1,
            width: 272,
            height: 52,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            margin: 12
        },
        passIconView: {
            position: 'absolute',
            right: 10,
            width: 22,
            height: 22,
            zIndex: 1
        },
        textInput: {
            fontFamily: GlobalStyles.fontSet.Regular,
            width: 272,
            height: 52,
            color: "black",
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
        <View style={[LocalStyles.view]} >

            <Suspense fallback={<Text></Text>} >
                <View style={LocalStyles.iconView}>
                    {icon === "key" && <Key fill={"black"} />}
                    {icon === "mail" && <Mail fill={"black"} />}
                    {icon === "signature" && <Signature fill={"black"} />}
                </View>
                <View style={LocalStyles.passIconView}
                    onTouchStart={() => setViewPassword(true)}
                    onTouchEnd={() => setViewPassword(false)}

                >
                    {password && <Eye fill={viewPassword ? "black" : "#606060"} />}
                </View>
            </Suspense>

            <TextInput
                style={LocalStyles.textInput}
                placeholder={textInputCondition === "blur" ? "" : placeholder}
                textContentType={mail ? "emailAddress" : "none"}
                secureTextEntry={password && !viewPassword && true}
                clearTextOnFocus={true}
                onFocus={(e) => { setTextInputCondition("blur") }}
                onEndEditing={() => setTextInputCondition("none")}
                onChangeText={e => onChangeText(e)}
                onFocus={onFocus}
            />

        </View>
    )
}
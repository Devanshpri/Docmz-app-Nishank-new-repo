import React, { useState } from 'react'
import { View, Text, ImageBackground, Image, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
import LogoImage from '../../../assets/icons/new_docplus_log.png'
import FacebookIcon from '../../../assets2/logo/facebookLogo.png'
import AppleIcon from '../../../assets2/logo/appleLogo.png'
import GoogleIcon from '../../../assets2/logo/googleLogo.png'
import MailIcon from '../../../assets2/logo/mailLogo.png'
import ButtonCompo from '../../../components/atoms2/button/button'
import InputCompo from '../../../components/atoms2/Input/Input'

export default function Login({ navigation }) {

    const [InputValue, setInputValue] = useState(null)

    return <ImageBackground style={{ flex: 1, justifyContent: 'space-between', position: 'relative' }} source={require("../../../assets2/image/backgroundImage.png")}>

        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20 }}>
            <Image style={{ width: 130, height: 40 }} source={LogoImage} />

            <View style={{}}>
                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: "#fff" }}>Not a Doctor?</Text>
                <Text style={{ fontFamily: 'Montserrat-Bold', color: "#fff", textDecorationLine: "underline" }}>Sign in here</Text>
            </View>
        </View>
        <View style={{ marginVertical: 50, marginHorizontal: 15 }}>
            <Text style={{ color: '#fff', fontSize: 26, fontFamily: 'Montserrat-Bold' }}>Welcome to</Text>
            <Text style={{ color: '#fff', fontSize: 34, fontFamily: 'Montserrat-Bold' }}>Docplus</Text>
            <Text style={{ color: '#fff', fontSize: 17, fontFamily: 'Montserrat-Regular', marginTop: 20 }}>Your access to the <Text style={{ fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>Doctors, Treatments</Text> and <Text style={{ fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>procedures</Text> around the Globe</Text>
        </View>
        <View style={{ backgroundColor: "#fff", paddingVertical: 30, paddingHorizontal: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>

            <KeyboardAvoidingView>
                <Text style={{ fontSize: 19, marginBottom: 20, fontFamily: 'Montserrat-SemiBold' }}>Sign in</Text>
                <InputCompo
                    type="both"  //  mail & phone
                    isLoading={false}
                    isError={false}
                    value={e => {
                        console.log("e : ", e)
                        setInputValue(e)
                    }}
                />
                <View style={{ marginVertical: 25, zIndex: -1 }}>
                    <ButtonCompo
                        title="Continue"
                        isLoading={false}
                        pressHandler={() => {
                            console.log("button : ", InputValue)
                        }}
                    />
                </View>
            </KeyboardAvoidingView>


            <View style={{ zIndex: -1 }}>
                <Text style={{ textAlign: 'center', marginTop: 10, fontFamily: 'Montserrat-SemiBold' }}>OR</Text>
                <Text style={{ fontSize: 10, textAlign: 'center', fontFamily: 'Montserrat-Regular' }}>Coutinue with</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10, marginTop: 10 }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={FacebookIcon} />
                    <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={GoogleIcon} />
                    <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={MailIcon} />
                    <Image style={{ width: 80, height: 80, borderRadius: 100 }} source={AppleIcon} />
                </View>
            </View>
        </View>

    </ImageBackground>
}

const styles = StyleSheet.create({

})



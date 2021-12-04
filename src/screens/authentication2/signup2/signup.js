import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';
import LogoImage from '../../../assets/icons/new_docplus_log.png';
import ButtonCompo from '../../../components/atoms2/button/button';
import InputCompo from '../../../components/atoms2/Input/Input';
import FacebookIcon from '../../../assets2/logo/facebookLogo.png';
import AppleIcon from '../../../assets2/logo/appleLogo.png';
import GoogleIcon from '../../../assets2/logo/googleLogo.png';
import AuthNavigationV2 from '../../../navigationV2/AuthNavigationV2';

export default function SignUp({navigation}) {
  const [InputValue, setInputValue] = useState(null);

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'space-between', position: 'relative'}}
      source={require('../../../assets2/image/backgroundImage.png')}>
      <Image
        style={{width: 130, height: 40, marginLeft: 20, marginTop: 40}}
        source={LogoImage}
      />
      <View
        style={{
          backgroundColor: '#fff',
          paddingVertical: 35,
          paddingHorizontal: 30,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View>
          <Text
            style={{
              fontSize: 19,
              marginBottom: 20,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Sign up
          </Text>
          <InputCompo
            type="phone"
            isError={false}
            isLoading={false}
            value={(e) => setInputValue(e)}
          />
          <View
            style={{
              marginVertical: 25,
              zIndex: -1,
            }}>
            <ButtonCompo
              title="Continue"
              isLoading={false}
              pressHandler={() => {
                //navigation.navigate('docregistration');
                console.log('button : ', InputValue);
              }}
            />
          </View>
        </View>

        <View style={{zIndex: -1}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            OR
          </Text>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              marginTop: 8,
              fontFamily: 'Montserrat-Regular',
            }}>
            Coutinue with
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginHorizontal: 30,
              marginTop: 10,
            }}>
            <Image
              style={{width: 80, height: 80, borderRadius: 100}}
              source={FacebookIcon}
            />
            <Image
              style={{width: 80, height: 80, borderRadius: 100}}
              source={AppleIcon}
            />
            <Image
              style={{width: 80, height: 80, borderRadius: 100}}
              source={GoogleIcon}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

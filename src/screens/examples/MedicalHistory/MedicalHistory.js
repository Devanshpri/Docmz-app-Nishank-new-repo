import React, {useState, useEffect, useMemo} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  useWindowDimensions,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {useDispatch} from 'react-redux';
import {
  NEW_PRIMARY_COLOR,
  INPUT_PLACEHOLDER,
  NEW_HEADER_TEXT,
  SECONDARY_BACKGROUND,
  SECONDARY_COLOR,
  NEW_PRIMARY_BACKGROUND,
  GREY_OUTLINE,
  GREY_CARD,
  NEW_PRIMARY_LIGHT_BG,
  GREY_BACKGROUND,
} from '../../../styles/colors';
import Vitals from './Vitals';
import Meds from './Meds';
import Reports from './Reports';
import Surgeries from './Surgeries';
import Allergies from './Allergies';
import Settings from './settings';
import {useSelector} from 'react-redux';
import {Colors} from '../../../styles/colorsV2';
import {Local, setLocale} from '../../../i18n';
import {GetPatientInfo} from '../../../reduxV2/action/PatientAction';
import Refer from './Refer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MedicalHistory = ({navigation, route}) => {
  // const {back} = route.params;
  const {userData, isDoctor, theme} = useSelector((state) => state.AuthReducer);
  const {patient} = useSelector((state) => state.PatientReducer);
  const [tab, setTab] = useState('vitals');
  const {width: screenWidth} = useWindowDimensions();
  const tabs = useMemo(() => {
    return [
      {name: 'Vitals', key: 'vitals'},
      {name: 'Meds', key: 'meds'},
      {name: 'Reports', key: 'reports'},
      {name: 'Surgeries', key: 'surgeries'},
      {name: 'Allergies', key: 'allergies'},
      {name: 'Refer', key: 'refer'},
      {name: 'Settings', key: 'settings'},
    ];
  }, []);

  useEffect(() => {
    const backAction = async () => {
      // navigation.goBack()

      if (patient.doctorToPatient) {
        // console.log('%%%%%%%%%%%');
        const dataB = await AsyncStorage.getItem('dataB');
        const {patient, appointment} =  JSON.parse(dataB)
        navigation.navigate('PatientDetails', {
          patient,
          appointment,
        });
        // navigation.goBack();
      } else {
        navigation.navigate('PatientLandingScreen');
      }
      // setState(doctors);
      // setActive("allDoctors")

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation, patient.doctorToPatient]);
  return (
    <View
      style={[
        styles.mianContainer,
        {backgroundColor: Colors.secondary_background[theme]},
      ]}>
      <TopNavBar
        onLeftButtonPress={async () => {
          if (patient.doctorToPatient) {
            // console.log('%%%%%%%%%%%');
            const dataB = await AsyncStorage.getItem('dataB');
            const {patient, appointment} =  JSON.parse(dataB)
            navigation.navigate('PatientDetails', {
              patient,
              appointment,
            });
            // navigation.goBack();
          } else {
            navigation.navigate('PatientLandingScreen');
          }
        }}
        headerText={`${Local('patient.medical_history.medical_history')}`}
        style={{
          Container: {
            // marginTop: 5,
            paddingTop: 5,
            marginBottom: 10,
          },
        }}
        navigation={navigation}
      />
      <View style={{height: 50, width: '100%', paddingVertical: '2%'}}>
        <FlatList
          horizontal
          data={tabs}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            if (item.name !== 'Settings' && item?.name !== 'Refer')
              return (
                <TouchableOpacity
                  onPress={() => setTab(item.key)}
                  style={{
                    width: screenWidth * 0.33,
                    justifyContent: 'center',
                    borderRightColor: 'green',
                    borderRightWidth: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={
                      item.key === tab
                        ? // ? styles.activeTabText
                          {
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 18,
                            color: Colors.primary_text_color[theme],
                          }
                        : // : styles.inactiveTabText
                          {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.input_placeholder_color[theme],
                            fontSize: 18,
                          }
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );

            if (item.name == 'Refer' && isDoctor)
              return (
                <TouchableOpacity
                  onPress={() => setTab(item.key)}
                  style={{
                    width: screenWidth * 0.33,
                    justifyContent: 'center',
                    borderRightColor: 'green',
                    borderRightWidth: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={
                      item.key === tab
                        ? // ? styles.activeTabText
                          {
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 18,
                            color: Colors.primary_text_color[theme],
                          }
                        : // : styles.inactiveTabText
                          {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.input_placeholder_color[theme],
                            fontSize: 18,
                          }
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );

            if (item.name == 'Settings' && isDoctor)
              return (
                <TouchableOpacity
                  onPress={() => setTab(item.key)}
                  style={{
                    width: screenWidth * 0.33,
                    justifyContent: 'center',
                    borderRightColor: 'green',
                    borderRightWidth: 1,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={
                      item.key === tab
                        ? // ? styles.activeTabText
                          {
                            fontFamily: 'Montserrat-Bold',
                            fontSize: 18,
                            color: Colors.primary_text_color[theme],
                          }
                        : // : styles.inactiveTabText
                          {
                            fontFamily: 'Montserrat-Regular',
                            color: Colors.input_placeholder_color[theme],
                            fontSize: 18,
                          }
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
          }}
        />
      </View>

      <View style={{flex: 1, backgroundColor: Colors.grey_background[theme]}}>
        {tab === 'vitals' ? (
          <Vitals navigation={navigation} />
        ) : tab === 'meds' ? (
          <Meds />
        ) : tab === 'reports' ? (
          <Reports />
        ) : tab == 'surgeries' ? (
          <Surgeries />
        ) : tab == 'allergies' ? (
          <Allergies />
        ) : isDoctor && tab == 'settings' ? (
          <Settings />
        ) : isDoctor && tab == 'refer' ? (
          <Refer />
        ) : null}
      </View>
    </View>
  );
};

export default MedicalHistory;

const styles = StyleSheet.create({
  mianContainer: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  tabContainer: {
    width: '33%',
    alignSelf: 'center',
    paddingHorizontal: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: NEW_PRIMARY_COLOR,
  },
  inactiveTabText: {
    fontFamily: 'Montserrat-Regular',
    color: INPUT_PLACEHOLDER,
    fontSize: 18,
  },
  activeTabText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: NEW_HEADER_TEXT,
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Image,
  Animated,
  Easing,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import {Picker} from '@react-native-community/picker';
import {CheckBox} from 'react-native-elements';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import AnimatedErrorText from '../../../components/atoms/animatedErrorText/AnimatedErrorText';
import Button from '../../../components/atoms2/button/button';
import InputCompo from '../../../components/atoms2/Input/Input1';

const Imagesrectangle = (props) => {
  return (
    <View style={{marginTop: 10, marginBottom: 20}}>
      <Image
        style={{
          height: 120,
          width: 160,
          marginLeft: 20,
          marginTop: 5,
          borderRadius: 20,
        }}
        source={props.imgs}
      />
    </View>
  );
};

const Picturesection = (props) => {
  const space = props.gap;
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: 'white',
          marginBottom: 5,
        }}>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            marginBottom: 5,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 16,
              marginLeft: 30,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 14,
              marginLeft: 10,
              color: 'grey',
              marginTop: 2,
            }}>
            {props.value} added
          </Text>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#E0F4F4',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: space,
                height: 30,
                width: 60,
                borderRadius: 25,
                marginTop: -5,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: 24,

                  color: '#297281',
                }}>
                +{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: 12,

                  color: '#297281',
                }}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{marginBottom: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Imagesrectangle imgs={require('../../../assets/jpg/person1.jpg')} />
          <Imagesrectangle imgs={require('../../../assets/jpg/person1.jpg')} />
          <Imagesrectangle imgs={require('../../../assets/jpg/person1.jpg')} />
        </ScrollView>
      </View>
    </View>
  );
};

const Appointmentduration = (props) => {
  const [selectedValue, setSelectedValue] = useState('15 mins');
  const space = props.gap;
  return (
    <View style={{marginTop: 20, flexDirection: 'row', marginBottom: 50}}>
      <Image
        style={{height: 20, width: 20, marginLeft: 30, marginTop: 5}}
        source={require('../../../assets/png/wall-clock.png')}
      />
      <Text
        style={{
          fontFamily: 'Gilroy-Medium',
          fontSize: 16,
          marginLeft: 10,
          marginTop: 5,
          color: 'grey',
        }}>
        {props.first}
      </Text>
      <View>
        <TouchableOpacity>
          <View
            style={{
              height: 30,
              width: 80,
              borderRadius: 15,
              elevation: 20,
              marginLeft: 40,
              marginTop: -4,
              marginLeft: space,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',

                height: 30,
                width: 80,
                borderRadius: 15,
                marginTop: 0,
                flexDirection: 'row',
                marginTop: 3,
              }}>
              <Picker
                selectedValue={selectedValue}
                style={{marginLeft: 40, fontSize: 10}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
              <Image
                style={{
                  height: 14,
                  width: 14,
                  marginLeft: 10,
                  color: '#EE296E',
                }}
                source={require('../../../assets/png/down-arrow.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ClinicImagesBox = (props) => {
  return (
    <View
      style={{
        height: 290,
        width: 300,
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 50,
        elevation: 20,
        marginBottom: 20,
      }}>
      <View
        style={{
          height: 300,
          width: 300,
          //marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 20,
        }}>
        <View>
          <Image
            style={{
              height: 200,
              width: 300,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            source={require('../../../assets/jpg/person1.jpg')}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 16,
              marginLeft: 10,
              marginTop: 15,
              color: 'grey',
            }}>
            {props.first}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, marginLeft: 10, marginTop: 15}}
              source={require('../../../assets/png/placeholder.png')}
            />
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 14,
                marginLeft: 2,
                marginTop: 15,
              }}>
              {props.second}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Reactanglewithtimeslots = (props) => {
  return (
    <View
      style={{
        height: 79,
        width: 167,
        marginLeft: 20,
        elevation: 20,
        borderRadius: 35,
        marginBottom: 20,
        marginTop: 10,
      }}>
      <View
        style={{
          height: 95,
          width: 165,
          //marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 15,
          }}>
          {props.first}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 5,
            color: 'grey',
          }}>
          {props.second}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Regular',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 5,
            color: 'grey',
          }}>
          {props.third}
        </Text>
      </View>
    </View>
  );
};

const Reactanglewithlocation = (props) => {
  return (
    <View
      style={{
        height: 94,
        width: 167,
        marginLeft: 20,
        elevation: 20,
        borderRadius: 35,
        marginBottom: 20,
        marginTop: 10,
      }}>
      <View
        style={{
          height: 110,
          width: 165,
          //marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 15,
            color: 'grey',
          }}>
          {props.first}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20, marginLeft: 20, marginTop: 5}}
            source={require('../../../assets/png/placeholder.png')}
          />
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 14,
              marginLeft: 2,
              marginTop: 5,
            }}>
            {props.second}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Reactanglewith2 = (props) => {
  return (
    <View
      style={{
        height: 94,
        width: 167,
        marginLeft: 20,
        elevation: 20,
        borderRadius: 35,
        marginBottom: 20,
        marginTop: 10,
      }}>
      <View
        style={{
          height: 110,
          width: 165,
          //marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 15,
            color: 'grey',
          }}>
          {props.first}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            marginLeft: 20,
            marginTop: 5,
            color: 'dodgerblue',
          }}>
          {props.second}
        </Text>
      </View>
    </View>
  );
};

const Reactanglewith3 = (props) => {
  return (
    <View
      style={{
        height: 94,
        width: 167,
        marginLeft: 20,
        elevation: 20,
        borderRadius: 35,
        marginBottom: 20,
        marginTop: 10,
      }}>
      <View
        style={{
          height: 110,
          width: 165,
          //marginLeft: 10,
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 18,
            marginLeft: 20,
            marginTop: 15,
          }}>
          {props.first}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            marginLeft: 20,
            marginTop: 5,
            color: 'grey',
          }}>
          {props.second}
        </Text>
        <Text
          style={{
            fontFamily: 'Gilroy-Regular',
            fontSize: 14,
            marginLeft: 20,
            marginTop: 5,
            color: 'dodgerblue',
          }}>
          {props.third}
        </Text>
      </View>
    </View>
  );
};

const Ovalbox = (props) => {
  const [hide, setHide] = useState(false);
  return (
    <View
      style={{
        height: 58,
        width: 222,
        //elevation: 100,
        marginBottom: 20,
        borderColor: '#F2F5F8',
        borderWidth: 6,
        marginLeft: 10,
        marginBottom: 15,

        borderRadius: 35,
      }}>
      <TouchableOpacity
        onPress={() => {
          setHide(!hide);
        }}>
        <View
          style={{
            height: 55,
            width: 220,
            backgroundColor: 'white',
            borderRadius: 35,
            flexDirection: 'row',
            marginTop: -4,
            // marginLeft: -4,
          }}>
          <Image
            style={{
              height: 18,
              width: 18,
              marginLeft: 10,
              color: '#EE296E',
              marginTop: 15,
              marginLeft: 30,
            }}
            source={require('../../../assets/png/upload.png')}
          />
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 16,
              marginLeft: 10,
              marginTop: 15,
            }}>
            {props.name}
          </Text>
          {hide && (
            <Image
              style={{
                height: 20,
                width: 20,
                marginLeft: 8,
                marginRight: 8,
                marginTop: 15,
              }}
              source={require('../../../assets/png/close.png')}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Greyboxwithupload = (props) => {
  const space = props.gap;
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
        marginBottom: 5,
        height: 66,
        width: '88%',
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        alignItems: 'center',
        marginLeft: 20,
      }}>
      <Text
        style={{
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 16,
          marginLeft: 10,
        }}>
        {props.name}
      </Text>
      <Image
        style={{height: 20, width: 20, marginLeft: 10}}
        source={require('../../../assets/png/information.png')}
      />

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: space,
            height: 30,
            width: 80,
            borderRadius: 15,
            marginTop: -5,
            flexDirection: 'row',
            marginTop: 3,
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 12,

              color: '#EE296E',
            }}>
            Upload
          </Text>
          <Image
            style={{
              height: 14,
              width: 14,
              marginLeft: 10,
              color: '#EE296E',
            }}
            source={require('../../../assets/png/upload.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Smallgreybox = (props) => {
  const [hide, setHide] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setHide(!hide);
      }}>
      <View
        style={{
          height: 40,
          width: 120,
          backgroundColor: '#EEEEEE',
          marginTop: 10,
          marginLeft: 10,
          marginBottom: 5,
          flexDirection: 'row',

          borderRadius: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Gilroy-SemiBold',
            fontSize: 16,
            marginLeft: 30,
            marginTop: 10,
          }}>
          {props.name}
        </Text>
        {hide && (
          <Image
            style={{
              height: 20,
              width: 20,
              marginLeft: 8,
              marginRight: 8,
              marginTop: 10,
            }}
            source={require('../../../assets/png/close.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const Headerwithoutadd = (props) => {
  const space = props.gap;
  return (
    <View style={{marginTop: 10, flexDirection: 'row'}}>
      <Text
        style={{
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 16,
          marginLeft: 30,
        }}>
        {props.name}
      </Text>
      <Image
        style={{height: 20, width: 20, marginLeft: 20}}
        source={require('../../../assets/png/information.png')}
      />
    </View>
  );
};

const Headerwithadd = (props) => {
  const space = props.gap;
  return (
    <View style={{marginTop: 10, flexDirection: 'row', marginBottom: 5}}>
      <Text
        style={{
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 16,
          marginLeft: 30,
        }}>
        {props.name}
      </Text>
      <Image
        style={{height: 20, width: 20, marginLeft: 10}}
        source={require('../../../assets/png/information.png')}
      />

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#E0F4F4',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: space,
            height: 30,
            width: 60,
            borderRadius: 25,
            marginTop: -5,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 24,

              color: '#297281',
            }}>
            +{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 12,

              color: '#297281',
            }}>
            Add
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Line = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#EEEEEE',
        marginTop: 15,
        marginBottom: 15,
      }}></View>
  );
};

const Inforectangle = (props) => {
  return (
    <View style={{marginBottom: 5}}>
      <Text
        style={{
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 16,
          marginLeft: 30,
        }}>
        {props.name}
      </Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          style={{height: 20, width: 20, marginLeft: 30}}
          source={props.imgs}
        />
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: 16,
            marginLeft: 10,
          }}>
          {props.value}
        </Text>
      </View>
    </View>
  );
};

const Greybigbox = (props) => {
  return (
    <View>
      <View
        style={{
          height: 84,
          width: 350,
          backgroundColor: '#EEEEEE',
          marginTop: 40,
          borderRadius: 15,
          marginLeft: 20,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Gilroy-Bold',
              fontSize: 20,
              marginLeft: 15,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Gilroy-SemiBold',
              fontSize: 16,
              marginLeft: 10,
              marginTop: 4,
            }}>
            {props.age}, {props.gender}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={{height: 20, width: 20, marginLeft: 15}}
            source={require('../../../assets/png/placeholder.png')}
          />
          <Text
            style={{
              fontFamily: 'Gilroy-Medium',
              fontSize: 12,
              marginLeft: 5,
            }}>
            {props.location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Headingwithpen = (props) => {
  const space = props.gap;
  const from = props.to;
  const handlepen = () => {
    from == 'personal' && props.navigation.navigate('photosboxx');
  };
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text
        style={{
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 20,
          marginLeft: 30,
        }}>
        {props.name}
      </Text>
      <TouchableOpacity
        onPress={() => {
          handlepen();
        }}>
        <Image
          style={{height: 30, width: 30, marginLeft: space}}
          source={require('../../../assets/png/pencil.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const SubmittingDocDetails = () => {
  return (
    <View style={{backgroundColor: '#EBEFF7'}}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{backgroundColor: '#F9FAFD', flexDirection: 'row'}}>
            <View style={{marginLeft: 30, marginTop: 70}}>
              <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 20}}>
                Perfect
              </Text>
              <Text
                style={{
                  fontFamily: 'Gilroy-SemiBold',
                  fontSize: 23,
                  color: 'dodgerblue',
                }}>
                Dr. Saini
              </Text>
              <View style={{marginTop: 10}}>
                <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16}}>
                  Please
                </Text>
                <Text
                  style={{
                    color: '#EE296E',
                    fontFamily: 'Gilroy-Medium',
                    fontSize: 16,
                  }}>
                  Complete your Profile
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 200,
                width: 300,
                marginLeft: 45,
                marginTop: 40,
                borderRadius: 15,
              }}>
              <Image
                style={{height: 140, width: 140, borderRadius: 70}}
                source={require('../../../assets/jpg/person1.jpg')}
              />

              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Gilroy-Medium',
                    fontSize: 16,
                    color: 'dodgerblue',
                    marginTop: 10,
                    marginLeft: 60,
                    // marginBottom: 10,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* picture section */}
          <Picturesection name="Photos" value={34} gap={150} />
          {/* personal info */}
          <View
            style={{
              marginTop: 20,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: 'white',
            }}>
            <Headingwithpen name="Personal Info" gap={180} to="personal" />
            <Greybigbox
              name="Dr.Jay Saini"
              age="32"
              gender="Male"
              location="Delhi, India"
            />

            <Line />
            <Inforectangle
              name="Phone"
              value="+91 9755446545"
              imgs={require('../../../assets/png/phone-call.png')}></Inforectangle>
            <Line />
            <Inforectangle
              name="Email"
              value="jaysaini@gmail.com"
              imgs={require('../../../assets/png/email.png')}></Inforectangle>
            <Line />
            <Headerwithadd name="Languages" gap={160} />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Smallgreybox name="English"></Smallgreybox>
              <Smallgreybox name="English"></Smallgreybox>
              <Smallgreybox name="English"></Smallgreybox>
              <Smallgreybox name="English"></Smallgreybox>
              <Smallgreybox name="English"></Smallgreybox>
            </ScrollView>
            <Line></Line>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 16,
                marginLeft: 30,
                marginTop: 0,
              }}>
              Upload
            </Text>
            <Greyboxwithupload name="National Identity Proof" gap={40} />
            <View style={{marginBottom: 30, backgroundColor: 'white'}}></View>
          </View>
          {/* area of expertise */}
          <View
            style={{
              marginTop: 20,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 20,
                marginLeft: 30,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Area of Expertise
            </Text>

            <Headerwithadd name="Speciality" gap={170}></Headerwithadd>
            <View style={{marginBottom: 20, backgroundColor: 'white'}}></View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Ovalbox name="Opthamologist"></Ovalbox>
              <Ovalbox name="Opthamologist"></Ovalbox>
              <Ovalbox name="Opthamologist"></Ovalbox>
            </ScrollView>
          </View>
          {/* registration details */}
          <View
            style={{
              marginTop: 0,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: 'white',
            }}>
            <Headingwithpen name="Registration Details" gap={120} />
            <View style={{marginBottom: 20, backgroundColor: 'white'}}></View>
            <Headerwithoutadd name="Registration Details"></Headerwithoutadd>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 16,
                marginLeft: 30,
                marginTop: 10,
              }}>
              1234567
            </Text>
            <Line />
            <Headerwithoutadd name="Registration Council"></Headerwithoutadd>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 16,
                marginLeft: 30,
                marginTop: 10,
              }}>
              Indian Medical Council
            </Text>
            <Line />
            <Headerwithoutadd name="Registration Year"></Headerwithoutadd>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 16,
                marginLeft: 30,
                marginTop: 10,
              }}>
              1234567
            </Text>
            <Line />
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 16,
                marginLeft: 30,
                marginTop: 0,
              }}>
              Upload
            </Text>
            <Greyboxwithupload name="Registration Documents" gap={40} />
            <View style={{marginBottom: 30, backgroundColor: 'white'}}></View>
          </View>
          {/* education details */}
          <View
            style={{
              marginTop: 20,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 20,
                marginLeft: 30,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Education Details
            </Text>
            <Headerwithadd name="Qualifications" gap={140} />
            <ScrollView
              style={{marginBottom: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Reactanglewith3
                first="MBBS"
                second="Medical college of London"
                third="1996"></Reactanglewith3>
              <Reactanglewith3
                first="MBBS"
                second="Medical college of London"
                third="1996"></Reactanglewith3>
            </ScrollView>
            <Line></Line>
            <Headerwithadd name="Credentials" gap={160} />
            <ScrollView
              style={{marginBottom: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Reactanglewith2
                first="Fellow of Indian college of Cardiology"
                second="1996"></Reactanglewith2>
              <Reactanglewith2
                first="Fellow of Indian college of Cardiology"
                second="1996"></Reactanglewith2>
            </ScrollView>
          </View>
          {/* practice details */}
          <View
            style={{
              marginTop: 20,
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Gilroy-SemiBold',
                fontSize: 20,
                marginLeft: 30,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Practice Details
            </Text>
            <Headerwithadd name="Hospital Affilations" gap={110} />
            <ScrollView
              style={{marginBottom: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Reactanglewithlocation
                first="Med center of therapy and Treatment"
                second="Delhi, India"></Reactanglewithlocation>
              <Reactanglewithlocation
                first="Med center of therapy and Treatment"
                second="Delhi, India"></Reactanglewithlocation>
            </ScrollView>
            <Line></Line>
            <Headerwithadd name="Clinic" gap={210} />
            <ScrollView
              style={{marginBottom: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ClinicImagesBox
                first="Med Cemter Nursing Home"
                second="Delhi, India"
              />
              <ClinicImagesBox
                first="Med Cemter Nursing Home"
                second="Delhi, India"
              />
              <ClinicImagesBox
                first="Med Cemter Nursing Home"
                second="Delhi, India"
              />
            </ScrollView>
            <Line></Line>
            {/* availability */}
            <Headerwithadd name="Availability" gap={160} />
            <ScrollView
              style={{marginBottom: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Reactanglewithtimeslots
                first="Mon"
                second="9.00 am - 1.30 pm"
                third="9.00 am - 1.30 pm"></Reactanglewithtimeslots>
              <Reactanglewithtimeslots
                first="Mon"
                second="9.00 am - 1.30 pm"
                third="9.00 am - 1.30 pm"></Reactanglewithtimeslots>
              <Reactanglewithtimeslots
                first="Mon"
                second="9.00 am - 1.30 pm"
                third="9.00 am - 1.30 pm"></Reactanglewithtimeslots>
            </ScrollView>
            <Appointmentduration
              first="Appointment Duration"
              gap={60}></Appointmentduration>
          </View>
          <View
            style={{
              width: 300,
              marginLeft: 50,
              marginTop: 20,
              paddingBottom: 20,
            }}>
            <Button
              title="Save & Continue"
              pressHandler={() => {
                console.log('pressed continue');
                checkInputs();
              }}
            />
          </View>
          {/* end of view */}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SubmittingDocDetails;

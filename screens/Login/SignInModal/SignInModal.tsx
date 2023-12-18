import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Image, ActivityIndicator } from 'react-native';
import { ArrowUturnLeftIcon } from "react-native-heroicons/solid";
import { useLayoutEffect, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUND_GRADIENT_COLOR, WHITE } from '../../../constants/colors';
import styles from './styles';
import SignInButtonComponent from '../../../components/Button/SignInButtonComponent';
import ClockComponent from '../../../components/Clock/ClockComponent';
import { ICON_PERSON, ICON_LOCK } from '../../../constants/imagePaths';

const SignInModal = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <LinearGradient
      className={styles.gradientContainer}
      colors={BACKGROUND_GRADIENT_COLOR}>
      <SafeAreaView>

        <View className={styles.headerContainer}>
          <TouchableOpacity className={'mt-2'} onPress={() => { navigation.goBack() }}>
            <ArrowUturnLeftIcon color={WHITE} size={40} />
          </TouchableOpacity>
          <View className={styles.headerTextContainer}>
            <Text className={styles.headerText}>
              Echoes Unraveled, Music Discovered
            </Text>
          </View>
          <ClockComponent />
        </View>


        <View className='mt-28 mb-12 px-4 items-center drop-shadow-2xl'>
          <Text className='font-montserratBold text-5xl text-white text-center shadow-lg'>Welcome</Text>
          <Text className='font-montserratBold text-5xl text-white text-center shadow-lg mt-1'>back!</Text>
          <Text className='font-montserrat text-2xl text-gray-300 mt-5' >You've been missed!</Text>
        </View>
        <View className='flex-col space-y-6'>

          <View className=' flex-row mx-10 mt-5'>
            <Image
              source={ICON_PERSON}
            />
            <TextInput className='ml-4 flex-1 pb-0 text-white border-b border-white mr-16' placeholder='Email' keyboardType='email-address'></TextInput>
          </View>

          <View className='flex-row mx-10'>
            <Image
              source={ICON_LOCK}
            />
            <TextInput className='ml-4 flex-1 pb-0 text-white border-b border-white mr-16 placeholder-stone-900' placeholder='Password' secureTextEntry={true}></TextInput>
          </View>
        </View>

        <View className='flex-row justify-center mt-20'>
          <SignInButtonComponent destination='SignIn' />
        </View>

        <View className='mt-20'>
          <Text className={styles.singUpNowText}>Don't have an account?</Text>
          <View className={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}><Text className={styles.singUpNowText + ' underline'}>Sign Up</Text></TouchableOpacity>
            <Text className={styles.singUpNowText}> now!</Text>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>
  )
}
export default SignInModal
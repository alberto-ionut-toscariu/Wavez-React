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
import { useFonts } from 'expo-font';

const SignInModal = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./Montserrat-Black.ttf'),
  });

  if (!fontsLoaded) {
    // Fonts are still loading, render a loading indicator or placeholder
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
        <Text>Loading fonts...</Text>
      </View>
    );
  }

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


        <View className='mt-28 mb-12 px-4 items-center'>
          <Text className='font-montserrat text-5xl text-white'>Welcome Back!</Text>
          <Text className='font-bold text-2xl text-gray-300' >You've been missed!</Text>
        </View>
        <View className='flex-col space-y-6'>

          <View className=' flex-row mx-10 '>
            <Image
              source={ICON_PERSON}
            />
            <TextInput className='ml-4 flex-1 pb-0 text-white border-b border-white mr-16' placeholder='Email ID' keyboardType='email-address'></TextInput>
          </View>

          <View className='flex-row mx-10'>
            <Image
              source={ICON_LOCK}
            />
            <TextInput className='ml-4 flex-1 pb-0 text-white border-b border-white mr-16 placeholder-stone-900' placeholder='Password' secureTextEntry={true}></TextInput>
          </View>

        </View>

        <View className='flex-row justify-center my-5'>
          <Text className='text-gray-400 text-sm'>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}><Text className='text-white text-sm'>Register</Text></TouchableOpacity>
        </View>

        <View className='flex-row justify-center'>
          <SignInButtonComponent destination='SignIn' />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}
export default SignInModal
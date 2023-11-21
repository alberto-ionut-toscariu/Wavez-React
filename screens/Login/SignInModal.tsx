import { SafeAreaView, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { ArrowUturnLeftIcon, EnvelopeIcon, LockClosedIcon } from "react-native-heroicons/solid";
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BACKGROUND_GRADIENT_COLOR_INV, WHITE } from '../../constants/colors';
import { LOGO_IMAGE2_FULL } from '../../constants/imagePaths';
import styles from './styles';
import SignInButton from '../../components/Button/SignInButton';

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
      colors={BACKGROUND_GRADIENT_COLOR_INV}>
      <SafeAreaView className={styles.modalContainer}>

        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <ArrowUturnLeftIcon color={WHITE} size={40} />
        </TouchableOpacity>

        {/*Image-Logo*/}
        <View className={styles.logoContainer}>
          <Image
            className={styles.logoSignInImage}
            source={LOGO_IMAGE2_FULL}
          />

        </View>
        <View className='mt-4 mb-12 px-4 items-center'>
          <Text className='font-bold text-3xl text-gray-200'>Welcome Back.</Text>
          <Text className='font-bold text-3xl text-gray-200'>You've been missed!</Text>
        </View>
        <View className='flex-col space-y-6'>

          <Text className='font-bold text-4xl text-white '> Sign in</Text>

          <View className=' flex-row border-b border-black'>
            <EnvelopeIcon size={20} color={WHITE} />
            <TextInput className='ml-4 flex-1 pb-0 text-white' placeholder='Email ID' keyboardType='email-address'></TextInput>
          </View>

          <View className='flex-row border-b border-black'>
            <LockClosedIcon size={20} color={WHITE} />
            <TextInput className='ml-4 flex-1 pb-0 text-white' placeholder='Password' secureTextEntry={true}></TextInput>
          </View>

        </View>

        <View className='flex-row justify-center my-5'>
          <Text className='text-gray-400 text-sm'>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}><Text className='text-white text-sm'>Register</Text></TouchableOpacity>
        </View>

        <SignInButton />

      </SafeAreaView>
    </LinearGradient>
  )
}
export default SignInModal
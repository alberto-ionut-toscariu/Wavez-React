import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { BACKGROUND_GRADIENT_COLOR } from '../../../constants/colors';
import ClockComponent from '../../../components/Clock/ClockComponent';
import SignInButtonComponent from '../../../components/Button/SignInButtonComponent';
import styles from './styles';
import { LOGO_IMAGE_FULL } from '../../../constants/imagePaths';
const LogInScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <LinearGradient
        className={styles.gradientContainer}
        colors={BACKGROUND_GRADIENT_COLOR}>
        {/*Header*/}
        <View className={styles.headerContainer}>

          <View className={styles.headerTextContainer}>
            <Text className={styles.headerText}>
              Echoes Unraveled, Music Discovered
            </Text>

          </View>

          <ClockComponent />
        </View>

        {/*Image-Logo*/}
        <View className={styles.logoContainer}>
          <Image
            className={styles.logoFullImage}
            source={LOGO_IMAGE_FULL}
          />
        </View>

        {/*App-Description*/}
        <View className={styles.appDescriptionContainer}>
          <Text className={styles.sloganText}>
            Let the Waves carry you away!
          </Text>
          <Text className={styles.descriptionText}>
            Discover your favorite hits and feel the music! All in one Innovative Music Recognition App!
          </Text>
        </View>
        {/*SignIn*/}
        <View className={styles.buttonContainer}>
          <SignInButtonComponent destination="SignIn" />
        </View>
        {/*SignUp*/}
        <View className={styles.buttonContainer}>
          <Text className={styles.singUpNowText}>Or </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}><Text className={styles.singUpNowText + ' underline'}>Sign Up</Text></TouchableOpacity>
          <Text className={styles.singUpNowText}> now!</Text>
        </View>
      </LinearGradient>
    </SafeAreaView >

  )
}
export default LogInScreen
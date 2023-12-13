import { View, Text, SafeAreaView, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { BACKGROUND_GRADIENT_COLOR } from '../../constants/colors';
import ClockComponent from '../../components/Clock/ClockComponent';
import SignInModalButton from '../../components/Button/SignInModalButton';
import RegisterModalButton from '../../components/Button/RegisterModalButton';
import styles from './styles';
import { LOGO_IMAGE_FULL } from '../../constants/imagePaths';
const LogInScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView >
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
          <Text className={styles.motoText}>
            Let the Wavez carry you away!
          </Text>
          <Text className={styles.descriptionText}>
            Discover your favorite hits and feel the music - All in one Innovative Music Recognition App!
          </Text>
        </View>
        {/*Register/SignIn*/}
        <View className={styles.buttonsContainer}>
          <SignInModalButton />
        </View>
      </LinearGradient>
    </SafeAreaView >

  )
}
export default LogInScreen
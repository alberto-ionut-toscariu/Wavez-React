import { View, Text, SafeAreaView, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { BACKGROUND_GRADIENT_COLOR } from '../../constants/colors';
import ClockComponent from '../../components/Clock/ClockComponent';
import SignInModalButton from '../../components/Button/SignInModalButton';
import RegisterModalButton from '../../components/Button/RegisterModalButton';
import styles from './styles';
import { LOGO_IMAGE, LOGO_IMAGE_FULL } from '../../constants/imagePaths';
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
          <Image
            className={styles.logoImage}
            source={LOGO_IMAGE}
          />
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
            Wavez lead you to groovy Beats!
          </Text>
          <Text className={styles.descriptionText}>
            Find your melodies and be part of a new community - All in one Innovative Music Recognition App!
          </Text>
        </View>
        {/*Register/SignIn*/}
        <View className={styles.buttonsContainer}>
          <SignInModalButton />
          <RegisterModalButton />
        </View>
      </LinearGradient>
    </SafeAreaView >

  )
}
export default LogInScreen
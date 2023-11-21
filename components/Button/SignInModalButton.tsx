import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const SignInModalButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SignIn' as never)}
      className={styles.signInModalButton}>
      <Text className={styles.textStyle}>Sign in</Text>
    </TouchableOpacity>
  )
}
export default SignInModalButton
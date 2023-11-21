import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const SignInButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SignIn' as never)}
      className={styles.signInButton}>
      <Text className={styles.textStyle}>Sign in</Text>
    </TouchableOpacity>
  )
}
export default SignInButton
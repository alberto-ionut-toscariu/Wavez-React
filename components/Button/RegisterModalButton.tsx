import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const RegisterModalButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Register' as never)}
      className={styles.registerModalButton}>
      <Text className={styles.textStyle}>Register</Text>
    </TouchableOpacity>
  )
}
export default RegisterModalButton
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CustomButtonProps {
  destination: string;
}

const SignInButtonComponent: React.FC<CustomButtonProps> = ({ destination }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(destination as never)}
      className={styles.signInModalButton}
    >
      <View className={styles.beforeAfterElementLeft}></View>
      <View className={styles.beforeAfterElementCenter}>
        <Text className={styles.textStyle}>Sign in</Text>
      </View>
      <View className={styles.beforeAfterElementRight}></View>
    </TouchableOpacity>
  );
};

export default SignInButtonComponent;
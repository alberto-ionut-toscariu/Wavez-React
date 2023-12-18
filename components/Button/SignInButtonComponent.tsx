import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface CustomButtonProps {
  destination: string;
  text?: string;
}

const SignInButtonComponent: React.FC<CustomButtonProps> = ({ destination, text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(destination as never)}
      className={styles.signInModalButton}
    >
      <View className={styles.beforeAfterElementLeft}></View>
      <View className={styles.beforeAfterElementCenter}>
        <Text className={styles.textStyle}>{text ? text : 'LOG IN!'}</Text>
      </View>
      <View className={styles.beforeAfterElementRight}></View>
    </TouchableOpacity>
  );
};

export default SignInButtonComponent;
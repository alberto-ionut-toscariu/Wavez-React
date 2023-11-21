import { SafeAreaView, TouchableOpacity } from 'react-native'
import { ArrowUturnLeftIcon } from "react-native-heroicons/solid";
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { BACKGROUND_GRADIENT_COLOR_INV, WHITE } from '../../constants/colors';
import styles from './styles';

const RegisterModal = () => {
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

            </SafeAreaView>
        </LinearGradient>
    )
}
export default RegisterModal
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/Login/LoginScreen/LogInScreen';
import { StatusBar } from 'expo-status-bar';
import SignInModal from './screens/Login/SignInModal/SignInModal';
import RegisterModal from './screens/Login/RegisterModal/RegisterModal';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignIn" component={SignInModal}
          options={{ presentation: 'fullScreenModal' }} />
        <Stack.Screen name="Register" component={RegisterModal}
          options={{ presentation: 'fullScreenModal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
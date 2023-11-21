import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/Login/LogInScreen';
import { StatusBar } from 'expo-status-bar';
import SignInModal from './screens/Login/SignInModal';
import RegisterModal from './screens/Login/RegisterModal';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignIn" component={SignInModal}
          options={{ presentation: 'fullScreenModal', headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterModal}
          options={{ presentation: 'fullScreenModal', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import { StatusBar, useColorScheme, View,Text } from 'react-native';
// import { StatusBar, useColorScheme} from 'react-native';
// import {
//   SafeAreaProvider,
  
// } from 'react-native-safe-area-context';
//  import {globalStyles} from './src/styles/globalStyles'; //Exporter name -->globalStyles  file location --> globalStyles.js
// import LoginScreen from './src/screens/LoginScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProfileScreen from './src/screens/ProfileScreen';
// import ForgotPassword from './src/screens/ForgotPassword';
// import Signup from './src/screens/Signup';
import AppNavigator from './src/navigation/AppNavigator';

// const Stack = createNativeStackNavigator();

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaProvider>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <LoginScreen/>
      
    //   {/* <AppContents /> */}
    // </SafeAreaProvider>

    //  <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //     />

    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //     />
    //           <Stack.Screen
    //       name="Profile"
    //       component={ProfileScreen}
    //     />
    //       <Stack.Screen
    //       name="Forgot"
    //       component={ForgotPassword}
    //     />
    //             <Stack.Screen
    //               name="Signup"
    //               component={Signup}
    //             />
    //   </Stack.Navigator>
    // </NavigationContainer>

        <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

// function AppContents() {
 

//   return (
//     <SafeAreaProvider>

//       <View style={globalStyles.container}>
//       <Text>Nice place to put your app content nested loop goes here and after .</Text>
//       <Text>The safe area insets...</Text>
//     </View>
//     </SafeAreaProvider>
    
//   );
// }


export default App;

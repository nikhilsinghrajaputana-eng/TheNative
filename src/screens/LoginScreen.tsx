import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
// import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  SafeAreaProvider,
  
} from 'react-native-safe-area-context';
import {Images} from '../Images/Index';
import {
  CommonStyles,
} from '../Root';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
// import AppNavigator from '../navigation/AppNavigator';


const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <SafeAreaProvider style={CommonStyles.container}>
      <View style={CommonStyles.content}>
        
        <Image source={Images.Head}  style={CommonStyles.image}/>
        <Text style={CommonStyles.title}>Welcome Back</Text>
        <Text style={CommonStyles.subtitle}>Sign in to continue..</Text>

        <TextInput
          style={CommonStyles.input}
          placeholder="Email"
          editable={false}
        />

        <TextInput
          style={CommonStyles.input}
          placeholder="Password"
          secureTextEntry
          editable={false}
        />

        {/* <TouchableOpacity style={CommonStyles.loginButton}>
          <Text style={CommonStyles.loginButtonText}>Login</Text>
        </TouchableOpacity> */}

    <TouchableOpacity
      style={CommonStyles.loginButton}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={CommonStyles.loginButtonText}>
        Login
      </Text>
    </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Forgot')}
        >
          <Text style={CommonStyles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={CommonStyles.footer}>
          <Text style={CommonStyles.footerText}>
          
            
             <TouchableOpacity 
        onPress={() => navigation.navigate('Signup')}
        >
            <Text style={CommonStyles.signupTextR}>  Don't have an account:{'  '}Sign Up</Text></TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;

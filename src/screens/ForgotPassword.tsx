// import {View,Text,TextInput } from 'react-native';
// import { CommonStyles } from '../Root';
// export default function ForgotPassword() {
//   return (
//     <View>
//       <Text>ForgotPassword Screen</Text>
//       <Text>No issues </Text>
//               <TextInput
//                 style={CommonStyles.input}
//                 placeholder="Email"
//                 editable={false}
//               />           
//     </View>
//   );
// }




import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { CommonStyles } from '../Root';

export default function ForgotPassword({ navigation }: any) {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      Alert.alert('Success', 'Password reset successful');

      navigation.navigate('Login');
    } else {
      Alert.alert(
        'Error',
        'Passwords do not match. Please re-enter.'
      );

      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Forgot Password
      </Text>

      {/* STEP 1 - EMAIL */}
      {step === 1 && (
        <>
          <Text>Email ID</Text>

          <TextInput
            style={CommonStyles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity
            style={CommonStyles.loginButton}
            onPress={handleNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </>
      )}

      {/* STEP 2 - OTP */}
      {step === 2 && (
        <>
          <Text>Enter OTP</Text>

          <TextInput
            style={CommonStyles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />

          <TouchableOpacity
            style={CommonStyles.loginButton}
            onPress={handleNext}>
            <Text>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {/* STEP 3 - RESET PASSWORD */}
      {step === 3 && (
        <>
          <Text>New Password</Text>

          <TextInput
            style={CommonStyles.input}
            placeholder="New Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Text>Re-enter Password</Text>

          <TextInput
            style={CommonStyles.input}
            placeholder="Re-enter Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity
            style={CommonStyles.loginButton}
            onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
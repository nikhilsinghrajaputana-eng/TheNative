import {
  View,
  Text,

  TouchableOpacity,
 
} from 'react-native';
import {
  SafeAreaProvider,
  
} from 'react-native-safe-area-context';
import {
  CommonStyles,
} from '../Root';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
export default function HomeScreen() {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaProvider style={CommonStyles.SafeArea}>
    <View>
      <Text>Home Screen</Text>
      <Text>

        2. Best Practices for Calling Style VariablesFollow these rules to ensure consistency
         and maintainability across your codebase:Call Semantic Tokens, not Globals: Always
          apply your custom properties using the semantic tokens (e.g., background-color: var(--bg-primary);).
      </Text>
       <TouchableOpacity
            style={CommonStyles.Button}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={CommonStyles.ButtonText}>
              Profile Screen
            </Text>
          </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  );
}
import {
  View,
  Text,
FlatList,
TouchableOpacity,
 
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  
} from 'react-native-safe-area-context';
import {
  CommonStyles,
  CardStyles,
} from '../Root';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
export default function HomeScreen() {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
 const data = [
  { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Orange' },
  { id: '4', name: 'Mango' },
  { id: '5', name: 'Pineapple' },
  { id: '6', name: 'Grapes' },
  { id: '7', name: 'Watermelon' },
  { id: '8', name: 'Papaya' },
  { id: '9', name: 'Guava' },
  { id: '10', name: 'Strawberry' },
  { id: '11', name: 'Blueberry' },
  { id: '12', name: 'Kiwi' },
  { id: '13', name: 'Peach' },
  { id: '14', name: 'Pear' },
  { id: '15', name: 'Cherry' },
  { id: '16', name: 'Pomegranate' },
  { id: '17', name: 'Dragon Fruit' },
  { id: '18', name: 'Lychee' },
  { id: '19', name: 'Coconut' },
  { id: '20', name: 'Jackfruit' },
  { id: '21', name: 'Plum' },
  { id: '22', name: 'Apricot' },
  { id: '23', name: 'Fig' },
  { id: '24', name: 'Raspberry' },
  { id: '25', name: 'Blackberry' },
];
  return (
    <SafeAreaView style={CardStyles.Flex}>
    <SafeAreaProvider style={CommonStyles.SafeArea}>
    <View style={CardStyles.Flex}>
      <Text>Home Screen</Text>
      <Text>

        2. Best Practices for Calling Style VariablesFollow these rules to ensure consistency
         and maintainability across your codebase:Call Semantic Tokens, not Globals: Always
          apply your custom properties using the semantic tokens (e.g., background-color: var(--bg-primary);).
      </Text>
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  style={CardStyles.Flex}
  contentContainerStyle={CardStyles.listContainer}
  renderItem={({ item }) => (
    <View style={CardStyles.card}>
      <Text style={CardStyles.cardTitle}>{item.name}</Text>
      <Text style={CardStyles.cardSubtitle}>
        Fresh fruit item {item.name}.
      </Text>
    </View>
  )}
/>

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
    </SafeAreaView>
  );
}
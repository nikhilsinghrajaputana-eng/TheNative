

import { StyleSheet } from 'react-native';

export const CardStyles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  Flex:{
   flex: 1 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,

    // Android Shadow
    elevation: 4,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
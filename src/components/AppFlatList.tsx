// src/components/AppFlatList.tsx
import React from 'react';
import { FlatList } from 'react-native';

type AppFlatListProps<T> = {
  data: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  keyExtractor: (item: T) => string;
};

export default function AppFlatList<T>({
  data,
  renderItem,
  keyExtractor,
}: AppFlatListProps<T>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}
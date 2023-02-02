import { useState } from 'react';
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import * as Styled from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da GC']);

  return (
    <Styled.Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <GroupCard title="Galera do Ignite" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
      />
    </Styled.Container>
  );
}
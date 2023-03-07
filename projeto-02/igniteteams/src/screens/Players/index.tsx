import { useState } from 'react';
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native';

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import * as Styled from "./styles";

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  const route = useRoute()

  const { group } = route.params as RouteParams

  return (
    <Styled.Container>
      <Header showBackButton />

      <Highlight 
        title={group}
        subtitle="adicione a galera e separe os times"
      />

      <Styled.Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
        />
      </Styled.Form>

      <Styled.HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <Styled.NumberOfPlayers>
          {players.length}
        </Styled.NumberOfPlayers>
      </Styled.HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
      />

      <Button 
        title="Remover Turma"
        type="SECONDARY"
      />
    </Styled.Container>
  )
}
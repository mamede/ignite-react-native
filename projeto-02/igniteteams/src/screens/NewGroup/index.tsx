import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as Styled from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group })
  }

  return (
    <Styled.Container>
      <Header showBackButton />

      <Styled.Content>
        <Styled.Icon />

        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Styled.Content>
    </Styled.Container>
  )
}
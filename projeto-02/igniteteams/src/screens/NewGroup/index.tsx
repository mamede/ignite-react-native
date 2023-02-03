import * as Styled from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
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
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Styled.Content>
    </Styled.Container>
  )
}
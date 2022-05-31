import React from "react";
import HighlightCard from "../components/HighlightCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserName,
  Icon,
  UserGreeting,
  HighlightCards,
} from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/85463497?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Jones Souza</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          trasaction="Ultima transação 15 de maio"
        />
        <HighlightCard
          type="down"
          title="Saida"
          amount="R$ 1.259,00"
          trasaction="Ultima transação 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          trasaction="Ultima transação 15 demarço"
        />
      </HighlightCards>
    </Container>
  );
}

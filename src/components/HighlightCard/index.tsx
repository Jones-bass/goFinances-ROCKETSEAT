import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTrasaction,
} from "./styles";

export default function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTrasaction>Última entrada dia 13 de maio</LastTrasaction>
      </Footer>

    </Container>
  );
}

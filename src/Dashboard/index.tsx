import React from "react";
import HighlightCard from "../components/HighlightCard";
import TransactionCard, {
  TransactionCardsProps,
} from "../components/TransactionCard";

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
  Transaction,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardsProps {
  id: string;
}

export default function Dashboard() {

  const data: DataListProps[] = [
    {
      id: "1",
      type: "positivo",
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "17/05/2022",
    },
    {
      id: "2",
      type: "negativo",
      title: "Pizza e Hamburguer",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "17/05/2022",
    },
    {
      id: "3",
      type: "negativo",
      title: "Aluguel de Apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "17/05/2022",
    },
  ];

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

      <Transaction>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transaction>
    </Container>
  );
}

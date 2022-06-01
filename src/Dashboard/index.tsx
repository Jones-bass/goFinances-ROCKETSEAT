import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../components/HighlightCard";
import TransactionCard from "../components/TransactionCard";

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

export default function Dashboard() {
  const data = [{
    title: "Desenvolvimento de Site",
    amount:"R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "17/05/2022",
  },
  {
    title: "Desenvolvimento de Site",
    amount:"R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "17/05/2022",
  },
  {
    title: "Desenvolvimento de Site",
    amount:"R$ 12.000,00",
    category: {
      name: "Vendas",
      icon: "dollar-sign",
    },
    date: "17/05/2022",
  }
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
        renderItem={({ item }) => <TransactionCard data={item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: getBottomSpace()
        }}
        />

      </Transaction>
    </Container>
  );
}

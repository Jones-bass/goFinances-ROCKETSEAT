import React, { useCallback, useEffect, useState } from "react";

import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HighlightCard from "../../components/HighlightCard";
import TransactionCard, {
  TransactionCardsProps,
} from "../../components/TransactionCard";

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
  LogoutButton,
  LoadContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native";

export interface DataListProps extends TransactionCardsProps {
  id: string;
}

interface HightlightProps {
  amount: string;
  lastTransaction: string;

}

interface HightlightData {
  entries: HightlightProps;
  expensives: HightlightProps;
  total: HightlightProps;
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [hightlightData, setHightlightData] = useState<HightlightData>(
    {} as HightlightData);

  const theme = useTheme();

  
  function getLastTransactionDate(
        collection: DataListProps[],
        type: "positive" | "negative"
    ) {
        const lastTransactions = new Date(
            Math.max.apply(Math, collection
                    .filter((transaction) => transaction.type === type)
                    .map((transaction) => new Date(transaction.date).getTime())));

        return `${lastTransactions.getDate()} de ${lastTransactions.toLocaleString(
          "pt-BR",
          { month: "long" }
      )}`;
  }

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensivesTotal = 0;

    const transactionFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {

        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensivesTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      });

    setTransactions(transactionFormatted);

    const lastTransactionEntries = getLastTransactionDate(transactions, "positive");
    const lastTransactionExpensives = getLastTransactionDate(transactions, "negative");
    const totalInterval = `01 a ${lastTransactionExpensives}`;

    const total = expensivesTotal - entriesTotal;

    setHightlightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`,
      },

      expensives: {
        amount: expensivesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última saída dia ${lastTransactionExpensives}`,
      },

      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: totalInterval,
      },
    });
    setIsLoading(false);
  }
  useEffect(() => {
    loadTransactions()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? 
        <LoadContainer>
          <ActivityIndicator
            color={theme.colors.primary}
            size="large"
          />
        </LoadContainer> :
   
        <>
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

              <LogoutButton>
                <Icon name="power" />
              </LogoutButton>

            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={hightlightData?.entries?.amount}
              trasaction={hightlightData.entries.lastTransaction}
            />
            <HighlightCard
              type="down"
              title="Saida"
              amount={hightlightData?.expensives?.amount}
              trasaction={hightlightData.expensives.lastTransaction}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={hightlightData?.total?.amount}
              trasaction={hightlightData.expensives.lastTransaction}
            />
          </HighlightCards>

          <Transaction>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transaction>
        </>
}
    </Container>
  );
}

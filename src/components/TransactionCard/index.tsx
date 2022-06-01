import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date,
} from "./styles";

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionCardsProps {
  type: 'positivo' | 'negativo';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionCardsProps;
}

export default function TransactionCard({data}: Props) {
  return (
    <Container> 
      <Title>{data.title}</Title>
      <Amount 
      type={data.type}>
        {data.type === 'negativo' && '- ' }
        {data.amount}
        </Amount>

      <Footer>
        <Category >
          <Icon name={data.category.icon} />
       <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

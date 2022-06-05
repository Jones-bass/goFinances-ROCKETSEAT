import React from "react";
import { categoriesUtils } from "../../util/categories";

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

export interface TransactionCardsProps {
  type: 'positivo' | 'negativo';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardsProps;
}

export default function TransactionCard({data}: Props) {
  const category = categoriesUtils.filter(
    item => item.key === data.category
  )[0];

  return (
    <Container> 
      <Title>{data.name}</Title>
      <Amount 
      type={data.type}>
        {data.type === 'negativo' && '- ' }
        {data.amount}
        </Amount>

      <Footer> 
        <Category >
          <Icon name={category.icon} />
       <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}

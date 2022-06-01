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

interface Category {
  name: string;
  icon: string;
}

interface TransactionProps {
  data : {
  title: string;
  amount: string;
  category: Category;
  date: string;
  }
}

export default function TransactionCard({data}: TransactionProps) {
  return (
    <Container> 
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>

      <Footer>
        <Category >
          <Icon name="dollar-sign" />
       <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid'

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from "../../components/Forms/Button";
import { InputForm } from "../../components/Forms/InputForm";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsType,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface FormData {
  [name: string]: string;
}

type NavigationProps = {
  navigate:(screen:string) => void;
}

const dataKey = '@gofinances:transactions'

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor nao pode ser negativo")
    .required("O valor é obrigatório"),
});

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);


  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  })

  const navigation = useNavigation<NavigationProps>()

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCLoseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType)
      return Alert.alert("Selecione o tipo da transação");

    if (category.key === "category")
      return Alert.alert("Selecione a categoria");

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset()
      setTransactionType('')
      setCategory({
          key: 'category',
          name: 'Caregoria'
      })

      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar")
    }
  };



 

  return (
    <TouchableWithoutFeedback //ao clicar fora o teclado autofechar
      onPress={Keyboard.dismiss}>

      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              placeholder="Nome"
              control={control}
              name="name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              placeholder="Preço"
              control={control}
              name="amount"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

            <TransactionsType>
              <TransactionTypeButton
                type="up"
                title="Income"
                onPress={() => handleTransactionTypeSelect("up")}
                isActive={transactionType === "up"}
              />
              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeSelect("down")}
                isActive={transactionType === "down"}
              />
            </TransactionsType>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal} />
          </Fields>

          <Button
            title="Enviar"
            onPress={handleSubmit(handleRegister)}
          ></Button>
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCLoseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}

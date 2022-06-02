import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
} from "./styles";


export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    return (

        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome"></Input>
                    <Input placeholder="Preço"></Input>
                    <TransactionsType>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionsType>
                </Fields>
                <Button title="Enviar"></Button>
            </Form>

        </Container>
    );
} 
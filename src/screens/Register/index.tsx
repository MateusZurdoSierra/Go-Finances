import React, { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import TransactionTypeButton from "../../components/Form/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import CategorySelect from "../../components/Form/CategorySelect";

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder={"Nome"} />
          <Input placeholder={"Preço"} />

          <TransactionsTypes>
            <TransactionTypeButton
              title={"Income"}
              type={"up"}
              isActive={transactionType === "up"}
              onPress={() => handleTransactionsTypeSelect("up")}
            />
            <TransactionTypeButton
              title={"Outcome"}
              type={"down"}
              isActive={transactionType === "down"}
              onPress={() => handleTransactionsTypeSelect("down")}
            />
          </TransactionsTypes>

          <CategorySelect title={"Categoria"} />
        </Fields>

        <Button title={"Enviar"} />
      </Form>
    </Container>
  );
};

export default Register;

import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

type TypeCard = "up" | "down" | "total";

interface IHighlightCardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: TypeCard;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

const HighlightCard: React.FC<IHighlightCardProps> = ({
  type,
  title,
  amount,
  lastTransaction,
}) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;

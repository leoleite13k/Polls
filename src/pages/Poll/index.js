import React from 'react';

import { Container, Card, Question, Answer } from './styles';

export default function Poll() {
  return (
    <Container>
      <Card>
        <Question>Pergunta</Question>
        <Answer>Resposta</Answer>
      </Card>
    </Container>
  );
}

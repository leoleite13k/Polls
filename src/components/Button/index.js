import React from 'react';

import { Container, TextButton } from './styles';

export default function Button({ text, marginTop, onPress }) {
  return (
    <Container marginTop={marginTop} onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Container>
  );
}

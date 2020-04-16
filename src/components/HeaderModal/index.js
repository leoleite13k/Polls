import React from 'react';
import IconAnt from 'react-native-vector-icons/AntDesign';

import { Container, Left, ButtonBack, Center, Title, Right } from './styles';

export default function HeaderModal({ title, handleModal }) {
  return (
    <Container>
      <Left />
      <Center>
        <Title>{title}</Title>
      </Center>
      <Right>
        <ButtonBack onPress={handleModal}>
          <IconAnt name="close" size={24} color="#fff" />
        </ButtonBack>
      </Right>
    </Container>
  );
}

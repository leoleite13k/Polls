import React from 'react';

import { Touchable, TextButton } from './styles';

export default function Button({ text, marginTop, onPress, ...props }) {
  return (
    <Touchable marginTop={marginTop} onPress={onPress} {...props}>
      <TextButton>{text}</TextButton>
    </Touchable>
  );
}

import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  align-self: flex-end;

  width: 50%;
  padding: 8px 22px;
  margin-top: ${(props) => props.marginTop || 24}px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#7159c1')};
  border-radius: 5px;
`;

export const TextButton = styled.Text.attrs({
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
})`
  font-weight: bold;
  font-size: 17px;
  color: #fff;
  text-align: center;
`;

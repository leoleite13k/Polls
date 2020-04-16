import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  align-self: flex-end;

  width: 50%;
  padding: 8px 22px;
  margin-top: ${(props) => props.marginTop || 24}px;
  background-color: #7159c1;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: #fff;
  text-align: center;
`;

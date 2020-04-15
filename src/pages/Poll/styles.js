import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7159c1;
`;

export const Card = styled.View.attrs({
  activeOpacity: 0.8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
})`
  padding: 12px;
  margin: 8px 12px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Question = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

export const Answer = styled.Text`
  color: #333;
  font-size: 16px;
`;

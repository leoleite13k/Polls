import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  padding-top: 16px;
  background-color: #7159c1;
`;

export const Card = styled.View.attrs({
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

  margin-bottom: 12px;
`;

export const Select = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  width: auto;
  align-items: center;
  margin-top: 8px;
`;

export const Answer = styled.Text`
  color: #333;
  font-size: 17px;
  margin-left: 12px;
  margin-bottom: 3px;
`;

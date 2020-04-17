import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7159c1;
`;

export const Search = styled.View`
  padding: 16px;
  background-color: #806bc9;
`;

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  autoCompleteType: 'off',
  selectionColor: '#7159c1',
})`
  font-size: 16px;

  height: 36px;
  color: #333;
  padding: 6px;
  border-radius: 5px;
  background-color: #fff;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 12,
    paddingBottom: 32,
  },
})``;

export const Card = styled.TouchableHighlight.attrs({
  underlayColor: '#E2DBF9',
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
  height: 70px;
  padding: 12px;
  margin: 8px 12px;
  border-radius: 5px;
  background-color: #fff;
`;

export const Text = styled.Text`
  color: #333;
  font-size: 18px;
`;

export const Load = styled.View`
  height: 50px;
  padding: 12px;
  justify-content: center;
  align-items: center;
`;

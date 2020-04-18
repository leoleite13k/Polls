import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
})`
  height: 90px;
  padding: 8px;
  margin: 8px 12px;
  border-radius: 5px;
  background-color: #fff;
`;

export const WapperQuestion = styled.View`
  flex: 1;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 4,
})`
  color: #333;
  font-size: 18px;
`;

export const WrapperStats = styled.View`
  flex-direction: row;
`;

export const SpaceStats = styled.View`
  flex: 1;
`;

export const TouchableStats = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  hitSplot: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  },
})`
  z-index: 5;
  elevation: 5;
`;

export const Stats = styled.Text`
  font-size: 17px;
  color: #7159c1;
`;

export const Load = styled.View`
  height: 50px;
  padding: 12px;
  justify-content: center;
  align-items: center;
`;

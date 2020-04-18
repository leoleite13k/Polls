import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #7159c1;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  padding-top: 16px;
`;

export const Card = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 6,
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
  margin-top: 12px;
  padding-right: 24px;
`;

export const Answer = styled.Text`
  color: #333;
  font-size: 17px;
  margin-left: 12px;
  margin-top: 1px;
`;

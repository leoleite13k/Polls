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
  padding: 32px 12px 32px;
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
  border-radius: 5px;
  background-color: #fff;
`;

export const WrapperVote = styled.View`
  margin-right: 4px;
`;

export const WrapperOption = styled.View`
  width: 36%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #333;

  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;

  margin: 12px 6px;
`;

export const Option = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #333;

  margin-right: 5px;
`;

export const Bar = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  width: ${(props) => props.width || 0}%;
  background-color: #7159c1;
`;

export const Votes = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 16px;
  color: #fff;

  text-align: right;
  margin-right: 3px;
`;

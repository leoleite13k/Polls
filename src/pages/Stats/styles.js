import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})`
  padding: 76px 12px 32px;
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
  /* flex: 1; */
  padding: 12px;
  border-radius: 5px;
  background-color: #fff;
`;

export const WrapperOption = styled.View`
  width: 35%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #333;

  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;

  margin: 12px 8px;
`;

export const Option = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #333;

  margin-right: 5px;
`;

export const WrapperBar = styled.View`
  flex: 1;
`;

export const Bar = styled.View`
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

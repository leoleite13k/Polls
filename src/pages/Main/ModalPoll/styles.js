import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7159c1;
`;

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 22,
    paddingRight: 12,
    paddingLeft: 12,
  },
})`
  flex: 1;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  max-height: 94px;
  padding: 8px;
  margin: 12px 0px;
  border-radius: 5px;
  background-color: #fff;

  font-size: 16px;
`;

export const ContentOption = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  margin-bottom: 26px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  margin: 6px 0px;
`;

export const Option = styled.View`
  flex: 1;
`;

export const TextOption = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 36px;
  width: 36px;
  margin-left: 15px;
  border-radius: 5px;
  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const ButtonSend = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin: 36px 0px;
  padding: 12px;
  border-radius: 5px;
  background-color: #fff;
`;

export const TextButton = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #7159c1;
`;

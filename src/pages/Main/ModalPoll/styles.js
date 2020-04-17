import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #7159c1;
`;

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 22px;
  padding-right: 12px;
  padding-left: 12px;
`;

export const Form = styled.View``;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const TextInput = styled.TextInput`
  min-height: 36px;
  max-height: 94px;
  padding: 4px;
  margin: 12px 0px;
  border-radius: 5px;
  background-color: #fff;

  font-size: 16px;
`;

export const ContentOption = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentInput = styled.View`
  flex: 1;
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
  background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
`;

export const TextButton = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.disabled ? '#fff' : '#7159c1')};
`;

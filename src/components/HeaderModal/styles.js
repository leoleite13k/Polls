import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  background-color: #9681de;

  padding-top: 30px;
  flex-direction: row;
`;

export const Left = styled.View`
  flex: 1;
  justify-content: center;

  margin-left: 8px;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 20,
    right: 20,
  },
})``;

export const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const Right = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;

  margin-right: 8px;
`;

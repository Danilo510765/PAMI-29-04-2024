import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(192, 192, 192);
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: gray;
  margin-bottom: 20px;
  fontWeight: bold
`;

export const Logo = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(50)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: white;
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: white;
  margin-left: 16px;
`;


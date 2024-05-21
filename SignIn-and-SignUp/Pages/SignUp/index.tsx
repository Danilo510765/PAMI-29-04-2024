import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../../SignIn-and-SignUp/src/components/screen/button/';
import { Input } from '../../../SignIn-and-SignUp/src/components/screen/input';
import { Container, Content, Title } from './styles';


export const SignUp: React.FunctionComponent = () => {
  return (
    <ScrollView
     keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Criar Conta</Title>
          <Input placeholder="Nome de Usuario"/>
          <Input placeholder="Email"/>
          <Input placeholder="Senha"/>
          <Button title='Criar Conta'/>
        </Content>
      </Container>
    </ScrollView>
  );
};

import React from 'react';

import '../../styles/global.css';

import { Container } from './styles'

import { LoginCadastro } from '../../components/LoginCadastro';
import { FormLogin } from '../../components/FormLogin'
import { Button } from '../../components/Button'
import { Option } from '../../components/Option'

export function App() {
  return (
    <Container>
      <LoginCadastro />
      <FormLogin />
      <Button />
      <Option />
      <img id="logo" src="./img/Architech.png" alt="" />
    </Container>
  );
}

export default App;

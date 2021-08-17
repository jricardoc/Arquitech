import React from "react";

import { 
    Container,
    TitleLogin,
    Linha,
    TitleCadastro
 } from './styles';

export function LoginCadastro(){
    return (
        <Container>
            <TitleLogin>LOGIN</TitleLogin>
            <Linha></Linha>
            <TitleCadastro>CADASTRO</TitleCadastro>
        </Container>
    );
}
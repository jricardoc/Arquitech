import React from "react";

import { 
    Conatiner,
    Line,
    User,
    Password,
    LineSecondary,
    Forgot
 } from './styles';

export function FormLogin(){
    return (
        <Conatiner>
            <User>Nome de Usuário</User>
            <Line />
            <Password>Senha</Password>
            <LineSecondary />
            <Forgot>Esqueci minha senha</Forgot>
        </Conatiner>
    );
}
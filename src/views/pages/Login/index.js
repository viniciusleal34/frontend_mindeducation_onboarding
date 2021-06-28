import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { Container, Forms, Body } from "./styles";

function Login() {
  return (
    <Container>
      <Body>
        <h1>ENTRAR</h1>
        <span>O seu passaporte para o futuro.</span>
        <Forms onSubmit={(e) => console.log(e)}>
          <span>E-mail</span>
          <Input name="aaa" placeholder="Youraddres@email.com" />
          <span>Senha</span>
          <Input name="senha" placeholder="Enter your password" />
          <Button>LOGIN</Button>
        </Forms>
        <div>
          Não possui uma conta ? <a href="#">Registrar-se</a>
        </div>
      </Body>
    </Container>
  );
}

export default Login;

import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { Container, Forms, Body } from "./styles";

function Cadastro() {
  return (
    <Container>
      <Body>
        <h1>CADASTRO</h1>
        <Forms onSubmit={(e) => console.log(e)}>
          <span>Nome completo</span>
          <Input name="aaa" placeholder="Your name" />
          <span>E-mail</span>
          <Input name="aaa" placeholder="Youraddres@email.com" />
          <span>CPF</span>
          <Input name="aaa" placeholder="your cpf" />
          <span>Senha</span>
          <Input name="senha" placeholder="****" />
          <span>Confirma senha</span>
          <Input name="senha" placeholder="****" />
          <Button>CADASTRAR</Button>
        </Forms>
        <div>
          Já possui uma conta ? <a href="#">Entrar</a>
        </div>
      </Body>
    </Container>
  );
}

export default Cadastro;

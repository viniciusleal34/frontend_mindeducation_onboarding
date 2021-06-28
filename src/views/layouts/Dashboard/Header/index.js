import React from "react";

import { Container, Content, NamePage } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <button>Logout</button>
      </Content>
      <NamePage>
        <b>Listagem de Usuarios</b>
      </NamePage>
    </Container>
  );
}

export default Header;

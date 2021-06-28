import React from "react";

import { Container } from "./styles";

function ButtonList({ icon: Icon, isActive }) {
  return (
    <Container isActive={isActive}>
      {Icon && <Icon size={25} style={{ marginRight: 15 }} />}Dashboard
    </Container>
  );
}

export default ButtonList;

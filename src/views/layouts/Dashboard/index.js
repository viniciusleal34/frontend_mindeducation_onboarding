import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { Container, Content } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
  );
}

export default Dashboard;

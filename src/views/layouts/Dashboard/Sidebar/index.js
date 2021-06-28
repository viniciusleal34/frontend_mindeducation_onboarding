import React from "react";
import ButtonList from "../ButtonList";
import {
  RiDashboardFill,
  RiUserSettingsFill,
  RiProfileFill,
} from "react-icons/ri";

import { Container, ContainerSide, Title, Menu } from "./styles";

function Sidebar() {
  return (
    <Container>
      <ContainerSide>
        <Title>Mind Education</Title>
        <h4>NAVEGAÇÃO</h4>
        <Menu>
          <ButtonList isActive icon={RiDashboardFill} />
          <ButtonList icon={RiUserSettingsFill} />
          <ButtonList icon={RiProfileFill} />
        </Menu>
      </ContainerSide>
    </Container>
  );
}

export default Sidebar;

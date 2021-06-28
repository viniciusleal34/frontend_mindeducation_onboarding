import { Form } from "@unform/web";
import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.lightGray};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

import { Form } from "@unform/web";
import styled from "styled-components";
import Background from "../../../assets/background.png";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 600px;
  width: 450px;
  background: white;
  border-radius: 30px;
  padding-bottom: 50px;
  h1 {
    color: ${colors.blue};
    ${fonts[700]};
    margin: 90px 30px 20px 50px;
  }
  > span {
    color: ${colors.extraLightGray};
    ${fonts[400]};
    font-size: 15px;
    margin: 0px 55px;
  }

  > div {
    display: flex;
    color: ${colors.blue};
    ${fonts[400]};
    margin: 20px 65px;
    font-weight: 400;
    > a {
      margin-left: 5px;
      color: blue;
    }
  }
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 30px !important;
    margin-right: 70px !important;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px !important;
  }
`;

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-self: center;
  span {
    margin-top: 20px;
    font-size: 12px;
    color: ${colors.blue};
    ${fonts[400]};
  }
`;

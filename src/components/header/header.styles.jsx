import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  margin-bottom: 25px;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  justify-content: space-between;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  position: relative;
  top: 0;
  // background-color: white;
`;

export const Title = styled.h1`
  font-family: "Bangers", cursive;
  font-size: 65px;
  color: white;
  letter-spacing: 0.3rem;
  margin-top: 0px;
  margin-left: 20px;
  // padding: 0px 0px 10px 0px;

`;

export const SearchBar = styled.h4`
  font-size: 16px;
  color: white;
  align-text: center;
  justify-content: center;
  align-items: center;
  // margin-right: 100px;
  margin-top: 30px;

`;

export const SearchImg = styled.img`
  width: 25px;
  height: 25px;
  margin-top: -10px;
`;

export const LogoContainer = styled(Link)`
  color: #0e131f;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-end;
  font-size: 13px;
`;

export const OptionLink = styled(Link)`
  padding: 5px 10px;
  cursor: pointer;
  color: white;
`;

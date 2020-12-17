import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: transparent;
  color: white;
  border: 1px solid black;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.1rem;
  border: 1px solid white;

  &:hover {
    background-color: #e7d8c9;
    color: #472d30;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #723d46;
  color: white;
  border: 1px solid #723d46;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #e26d5c;
    border-color: #e26d5c;
    color: white;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 130px;
  width: auto;
  outline: 0;
  height: 45px;
  border: 1px solid transparent;
  letter-spacing: 0.5px;
  line-height: 45px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: 'TTCommons-Regular';
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
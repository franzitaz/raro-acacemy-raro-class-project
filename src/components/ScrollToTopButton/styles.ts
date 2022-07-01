import styled from 'styled-components';

export const ScrollToTopButtonStyled = styled.button<{
  buttonVisible?: boolean;
}>`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.violetBlue};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  right: 0;
  bottom: 20px;
  right: 400px;
  border-radius: 50%;
  border: 0;
  opacity: 0.6;
  transition: all 0.2s;
  display: ${(props) => (props.buttonVisible ? 'block' : 'none')};

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 0;
  }
`;

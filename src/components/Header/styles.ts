import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 9.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.header};
    background-color: ${theme.colors.white};
    padding-inline: ${theme.spacing.huge};
    padding-block: ${theme.spacing.medium};
  `}
`;

export const LogoImage = styled.img`
  height: 100%;
`;

export const LogoButton = styled.button`
  border: none;
  background: transparent;
  height: 100%;
`;

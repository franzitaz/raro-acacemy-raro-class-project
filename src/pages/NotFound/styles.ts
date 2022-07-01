import styled, { css } from 'styled-components';

export const Container = styled.body`
  ${({ theme }) => css`
    background: ${theme.colors.gradients.bgNotFoundPage};
  `}
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const LogoImage = styled.img`
  width: 14vw;
  margin: 4rem 0 0 4rem;
`;

export const BackgroundArt = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;

  background-attachment: scroll;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const WrapText = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 8vw;
  }

  h3 {
    letter-spacing: 0.2rem;
    font-size: 1.12vw;

    ${({ theme }) => css`
      font-weight: ${theme.font.weight.light};
    `}
  }

  a {
    margin-bottom: 13.8rem;
    text-decoration: none;
    font-size: 1.7vw;

    &:hover {
      transition: transform 300ms;
      transform: scale(1.08);
    }

    will-change: transform;
    transition: transform 450ms;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.semiBold};
      margin-top: ${theme.spacing.huge};
    `}
  }

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

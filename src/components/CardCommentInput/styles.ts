import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;

  > form {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  margin-left: 1rem;

  ${({ theme }) => css`
    border: solid 3px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at bottom left,
        #4e47c2 -14.58%,
        rgba(126, 188, 223, 0.6) 100%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;

    border-radius: ${theme.border.radius.round};
    width: 5rem;
  `};
`;

export const Input = styled.input`
  width: 100%;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  margin-left: 20px;
  border: 2px solid transparent;

  ${({ theme }) => css`
    font-family: ${theme.font.family.montserrat};
    font-size: ${theme.font.sizes.xsmall};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.input};

    &:focus-visible {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.oceanBlue};
    border-radius: ${theme.border.radius.large};
    padding-inline: 2.8rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    width: 12rem;
    padding-block: 0.8rem;
    margin-top: 1.5rem;

    &:disabled {
      background: ${theme.colors.gray};
      cursor: not-allowed;
      opacity: 0.5;
    }
  `}
`;

export const DefaultButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radius.large};
    padding-inline: 2.8rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    height: 30px;
    margin-top: 15px;
  `}
`;

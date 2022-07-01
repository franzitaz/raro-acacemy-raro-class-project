import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

export const GreetingMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.medium};
  `};
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing.xxsmall};

  > svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const UserPicture = styled.img`
  ${({ theme }) => css`
    border: solid 3px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at bottom left,
        #4e47c2 -14.58%,
        rgba(126, 188, 223, 0.6) 100%
      );
    background-origin: border-box;
    background-origin: border-box;
    background-clip: content-box, border-box;

    border-radius: ${theme.border.radius.round};
    width: 4.2rem;
  `};
`;

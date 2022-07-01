import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 3;
  right: 0;
  top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23.8rem;
  animation: dropdown 0.5s ease-in-out;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.violetBlue};
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.boxShadow.header};
    padding-top: ${theme.spacing.large};
    padding-bottom: ${theme.spacing.small};
    gap: ${theme.spacing.medium};
  `};

  @keyframes dropdown {
    0% {
      opacity: 0;
      transform: translateY(-3rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
    background-clip: content-box, border-box;
    border-radius: ${theme.border.radius.round};
    width: 10rem;
  `};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxsmall};
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `};
`;

export const UserEmail = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.light};
  `};
`;

export const ActionsMenu = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${theme.colors.violetBlue};
    padding-top: ${theme.spacing.small};
  `};
`;

export const ActionItem = styled.button`
  border: 0;
  background-color: transparent;
  width: 80%;
  transition: all 0.2s ease-in-out;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    padding-block: ${theme.spacing.xsmall};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.medium};
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  `};
`;

export const ActionsMenuLeft = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${theme.colors.violetBlue};
    padding-top: ${theme.spacing.small};
  `};
`;

export const ActionItemLeft = styled.button`
  border: 0;
  background-color: transparent;
  width: 100%;
  transition: all 0.2s ease-in-out;
  margin-top: -0.5rem;
  margin-bottom: -1.3rem;
  text-align: left;
  border-radius: 0 !important;
  padding-left: ${({ theme }) => theme.spacing.xlarge};

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    padding-block: 0.7rem;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.medium};
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  `};
`;

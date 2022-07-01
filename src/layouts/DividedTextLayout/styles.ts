import styled, { css } from 'styled-components';

export const Title = styled.h1`
  display: flex;
  color: hsla(242, 50%, 38%, 1);
  justify-content: center;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const SubTitle = styled.p`
  display: flex;
  color: hsla(242, 50%, 38%, 1);
  justify-content: center;
  font-size: ${({ theme }) => theme.font.sizes.xxmedium};
  letter-spacing: 0.2rem;
`;

export const LinksParagrafo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: hsla(242, 50%, 38%, 1);

  a {
    display: flex;
    text-decoration: none;
  }
`;

export const LinkParagrafo1 = styled.div`
  &:hover {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const LinkParagrafo2 = styled.div`
  &:hover {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const ListInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.xlarge};

  gap: ${({ theme }) => theme.spacing.large};

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.large};
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 1.5rem;
  margin-left: 6rem;
  text-align: center;
  font-size: 1.1rem;
`;

export const FooterText1 = styled.section`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `};

  a {
    text-decoration: none;

    ${({ theme }) => css`
      color: ${theme.colors.gray};

      &:hover {
        font-weight: ${({ theme }) => theme.font.weight.bold};
      }
    `};
  }
`;

export const FooterText2 = styled.p`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `};
`;

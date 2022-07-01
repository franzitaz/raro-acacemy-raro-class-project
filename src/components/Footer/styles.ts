import styled, { css } from 'styled-components';

export const Container = styled.footer`
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url('/assets/art/artFooterBackground.png');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 300% 100%;
  background-attachment: scroll;
`;

export const WrapIcons = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.small};
  `};
`;

export const StarIcon = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  img {
    width: 4.5rem;
  }
`;

export const WrapText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.3rem;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.exxsmall};
  `};
`;

export const TermsPrivacyLink = styled.section`
  a {
    text-decoration: none;
    margin: 0 0.5rem 0 0.5rem;

    ${({ theme }) => css`
      color: ${theme.colors.white};

      &:hover {
        font-weight: ${theme.font.weight.bold};
      }
    `};
  }
`;

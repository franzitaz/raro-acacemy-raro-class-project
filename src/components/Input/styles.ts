import styled, { css } from 'styled-components';

type InputProps = {
  isInvalid?: boolean;
};

export const Container = styled.div`
  position: relative;

  > svg,
  > .icon-action {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: hsla(242, 50%, 38%, 1);
  }

  .icon-action {
    background: transparent;
    border: 0;
    padding: 0;
    left: 289px;
  }

  svg:first-of-type {
    left: 13px;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  padding-inline: 3.5rem;
  padding-block: 1rem;

  border: 2px solid transparent;

  ${({ theme }) => css`
    font-family: ${theme.font.family.montserrat};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.input};

    &:focus-visible {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  `}

  ${({ isInvalid, theme }) =>
    isInvalid &&
    css`
      border-color: ${theme.colors.error};
    `}
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -1.9rem;
  left: 13px;
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
  `}
`;

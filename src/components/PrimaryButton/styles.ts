import styled, { css } from 'styled-components';

type ButtonProps = {
  size: 'small' | 'fullWidth';
};

export const Button = styled.button<ButtonProps>`
  border: none;
  transition: transform 450ms;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;

  ${({ theme, size }) => css`
    width: ${size === 'fullWidth' ? '100%' : 'auto'};
    background: ${theme.colors.gradients.button};
    border-radius: ${size === 'small'
      ? theme.border.radius.small
      : theme.border.radius.large};
    padding-inline: ${theme.spacing.xxlarge};
    padding-block: ${size === 'small' ? theme.spacing.small : '1rem'};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
  `}

  &:hover {
    transition: transform 300ms;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

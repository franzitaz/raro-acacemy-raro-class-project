import styled, { css } from 'styled-components';

type StarButtonProps = {
  isFavorited: boolean;
  defaultColor?: 'white' | 'primary';
};

export const StarButton = styled.button<StarButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  z-index: 2;
  ${({ theme, isFavorited, defaultColor }) => css`
    border-radius: ${theme.border.radius.round};
    transition: all 0.3s;
    > svg {
      fill: ${isFavorited
        ? theme.colors.yellow
        : theme.colors[defaultColor || 'white']};
    }
    &:hover {
      background-color: ${defaultColor === 'white'
        ? theme.colors.gray
        : `${theme.colors.violetBlue}88`};
    }
  `}
`;

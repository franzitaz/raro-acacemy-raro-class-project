import styled, { css } from 'styled-components';

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.small};
  `};
`;

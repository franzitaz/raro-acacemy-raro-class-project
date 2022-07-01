import styled, { css } from 'styled-components';

export const Container = styled.section``;

export const RowContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-right: 6.4rem;
`;

export const ClassesWrapper = styled.div`
  position: relative;
  padding-inline: 6.4rem;
`;

export const OpenClassesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};

  padding-inline: 6.4rem;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-block: 5rem;
`;

export const SelectContainer = styled.div`
  position: relative;
  > svg {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.colors.primary};
    pointer-events: none;
  }
`;

export const Select = styled.select`
  padding-block: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 3rem;
  border-radius: 4rem;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    box-shadow: ${theme.boxShadow.input};
    font-size: ${theme.font.sizes.small};
    background-color: ${theme.colors.white};
  `};
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.font.sizes.small};
  display: block;
  padding-block: 1rem;
  &:checked {
    background-color: ${({ theme }) => theme.colors.violetBlue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

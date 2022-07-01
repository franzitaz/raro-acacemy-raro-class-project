import styled, { css } from 'styled-components';

type IconProps = {
  type: 'class' | 'favorite' | 'tutoring' | 'openClasses';
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.large};
    padding-inline: ${theme.spacing.huge};
  `}
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const Icon = styled.img<IconProps>`
  height: 100%;
  max-height: 6.4rem;
`;

export const WrapButtonShowOrHide = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonShowOrHide = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const Filter = styled.select``;

export const FilterOption = styled.option``;

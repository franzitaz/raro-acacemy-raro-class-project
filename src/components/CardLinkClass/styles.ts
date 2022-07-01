import styled, { css } from 'styled-components';

export const Container = styled.section<{ fixedWidth?: boolean }>`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid rgba(181, 179, 230, 0.34);
    gap: ${theme.spacing.small};
    color: ${theme.colors.primary};
    padding: ${theme.spacing.medium};
    &:hover {
      background-color: #e1e0f5;
    }
  `}
`;

export const WrapIconTitle = styled.section`
  display: flex;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 30rem;
`;

export const WrapIconInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const IconPlay = styled.img`
  padding-left: ${({ theme }) => theme.spacing.xsmall};
`;

export const VideoTimeLenght = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-left: ${({ theme }) => theme.spacing.small};
`;

export const MainContent = styled.main`
  padding-block: 0;
`;

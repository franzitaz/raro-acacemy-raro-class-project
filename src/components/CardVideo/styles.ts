import styled, { css } from 'styled-components';

type VideoFieldProps = {
  backgroundImg: string;
};

export const Container = styled.div<{ fixedWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  position: relative;

  width: ${({ fixedWidth }) => (fixedWidth ? '30rem' : '100%')};
`;
export const VideoField = styled.div<VideoFieldProps>`
  position: relative;
  right: 3px;
  width: 100%;
  height: 16.5rem;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  background-position: center;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.thumb};
    transition: all 0.3s;

    > button {
      position: absolute;
      bottom: ${theme.spacing.small};
      right: ${theme.spacing.small};
    }

    &::after {
      content: '';
      background: transparent;
      position: absolute;
      transition: all 0.3s;
      inset: 0;
      border-radius: ${theme.border.radius.medium};
      background: linear-gradient(to top, rgb(0, 0, 0, 0.3) 0.1%, transparent);
      opacity: 0;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  `}
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding-left: ${theme.spacing.medium};
    gap: ${theme.spacing.small};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const SecondaryInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-left: calc(${theme.spacing.medium} + 2.4rem);
    padding-right: ${theme.spacing.small};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};

    > span {
      margin-inline: ${theme.spacing.xsmall};
    }
  `}
`;

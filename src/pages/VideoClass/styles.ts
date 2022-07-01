import styled, { css } from 'styled-components';

export const ContainerPLayerVideo = styled.div`
  .react-player > .react-player__preview {
    background-repeat: no-repeat;
    background-size: contain !important;
    background-color: #000;
    height: 67vh !important;
  }

  .react-player > video {
    height: 36vw !important;
    background-color: black;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  flex: 1;
  padding-block: ${({ theme }) => theme.spacing.large};
`;

export const Star = styled.div`
  padding-left: 2.5rem;
`;

export const PlayIcon = styled.img`
  padding-left: 2.5rem;
  padding-top: 0.5rem;
  align-self: flex-start;
`;

export const StarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin-top: ${({ theme }) => theme.spacing.xxsmall};

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.round};
    bottom: ${theme.spacing.small};
    right: ${theme.spacing.small};
    transition: all 0.3s;
    > svg {
      fill: ${theme.colors.primary};
    }
    &:hover {
      background-color: ${theme.colors.grayFade};
    }
  `}
  cursor: pointer;
`;

export const WrapTitleDescription = styled.div`
  ${({ theme }) => css`
    width: 83%;
    font-size: 1rem;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};
    padding-left: ${theme.spacing.medium};

    h1 {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.semiBold};
    }

    h2 {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.small};
    }

    > time {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  ${({ theme }) => css`
    gap: ${theme.spacing.medium};
    padding-top: ${theme.spacing.medium};
    padding-left: ${theme.spacing.medium};
  `}
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
`;

export const ContainerRight = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: auto;
  align-self: flex-start;
  background: #fbfbfe;
  box-shadow: -4px 0px 20px rgb(0 0 0 / 10%);
`;

export const TitleRecommended = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    padding: ${theme.spacing.medium};

    > p {
      text-align: center;
      font-weight: ${theme.font.weight.semiBold};
      font-size: ${theme.font.sizes.small};

      padding: ${theme.spacing.medium};
      box-shadow: ${theme.boxShadow.input};
      border-radius: ${theme.border.radius.medium};
    }
  `}
`;

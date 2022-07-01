import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LeftSide = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CardContentVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const PlayerVideo = styled.div`
  width: 100%;
  height: 65rem;
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const TitleVideo = styled.div`
  width: 95rem;
  height: 4.5rem;
  margin-top: ${({ theme }) => theme.spacing.xsmall};
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const CommentField = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80rem;
`;

export const User = styled.div`
  width: 5rem;
  height: 5rem;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.medium};
    border-radius: ${theme.border.radius.round};
  `}
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const InputComment = styled.div`
  width: 70rem;
  height: 5rem;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.medium};
    border-radius: ${theme.border.radius.medium};
  `}
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const CommentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.medium};
    padding-left: ${theme.spacing.medium};
  `}
`;
export const CommentCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.xsmall};
`;
export const Comment = styled.div`
  width: 31rem;
  height: 2rem;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.small};
    border-radius: ${theme.border.radius.medium};
  `}
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

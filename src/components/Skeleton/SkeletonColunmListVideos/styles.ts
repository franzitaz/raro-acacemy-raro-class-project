import styled from 'styled-components';

export const RightSide = styled.aside`
  display: flex;
  flex-direction: column;
`;
export const NextVideoCard = styled.div`
  width: 33.4rem;
  height: 8rem;
  margin-bottom: ${({ theme }) => theme.spacing.small};
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

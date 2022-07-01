import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.4rem;
`;

export const Logo = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 6.4rem;
  border-radius: 50%;
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
export const TitleList = styled.div`
  width: 16rem;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 2.5rem;
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
export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 6.4rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CardVideo = styled.div`
  width: 30rem;
  height: 16.5rem;
  margin-right: 1rem;
  margin-bottom: 0;
  border-radius: 2.5rem;
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
  width: 28rem;
  height: 1.9rem;
  margin-top: 0.5rem;
  border-radius: 2.5rem;
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
export const VideoData = styled.div`
  width: 10rem;
  height: 1.9rem;
  margin-top: 0.5rem;
  border-radius: 2.5rem;
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

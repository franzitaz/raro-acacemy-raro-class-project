import styled from 'styled-components';

type ScrollSignWrapperProps = {
  fullWidth?: number;
  offsetWidth?: number;
  scrollSpeedFactor: number;
};

export const ScrollSignWrapper = styled.div<ScrollSignWrapperProps>`
  overflow: hidden;

  .title-content {
    position: relative;
    width: 100%;
    left: 0%;
  }

  &:hover {
    .title-content {
      * {
        overflow: visible;
      }
      left: ${({ fullWidth }) => `calc(-${fullWidth}px + 100%)`};
      transition: ${(props) =>
        props.offsetWidth
          ? `left ${props.offsetWidth / props.scrollSpeedFactor}s linear`
          : ''};
    }
  }
`;

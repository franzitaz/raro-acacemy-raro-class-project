import styled from 'styled-components';

export const Container = styled.div`
  transition: margin 250ms ease-in-out 0s;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.large};

  &:hover {
    animation-play-state: paused;
  }
`;

export const ArrowLeft = styled.button`
  left: 0;
`;

export const ArrowRight = styled.button`
  right: 0;
`;

export const Carousel = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  ${ArrowLeft}, ${ArrowRight} {
    display: block;
    width: 7rem;
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0.6;
    transition: all 250ms ease-in-out 0s;
    color: ${({ theme }) => theme.colors.violetBlue};

    svg {
      height: 4.5rem;
      width: 4.5rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      color: ${(props) => props.theme.border.radius.medium};
    }

    &.arrow {
      width: 6rem;
      height: 100%;
      border-radius: ${(props) => props.theme.border.radius.medium};
      top: 0;
      opacity: 1;

      svg {
        height: 45px;
        width: 45px;
        padding: 10px;
        border-radius: 50%;
        color: ${(props) => props.theme.colors.primary};
      }
    }

    &:hover {
      opacity: 1;
    }
  }
`;

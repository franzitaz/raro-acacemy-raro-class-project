import styled from 'styled-components';

export const LogoScMedia = styled.img`
  margin: 0 1rem 0 1rem;
  width: 3rem;

  &:hover {
    transition: transform 300ms;
    transform: translateY(-0.8rem);
  }
  will-change: transform;
  transition: transform 450ms;
`;

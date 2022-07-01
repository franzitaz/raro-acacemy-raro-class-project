import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  flex: 7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SideRight = styled.main`
  flex: 8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-height: 100%;
  max-width: 320px;
  width: 100%;
`;

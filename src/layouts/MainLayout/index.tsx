import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import * as S from './styles';

export const MainLayout = () => (
  <S.Container>
    <Header />
    <S.BellowWrapper>
      <S.MainContent>
        <Outlet />
      </S.MainContent>
    </S.BellowWrapper>
  </S.Container>
);

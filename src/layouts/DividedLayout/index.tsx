import { Outlet } from 'react-router-dom';
import * as S from './styles';

export const DividedLayout = () => {
  return (
    <S.Page>
      <S.SideLeft>
        <img
          src="/assets/art/peopleWorkingWithLogo.png"
          alt="Imagem da Raro academy"
        />
      </S.SideLeft>
      <S.SideRight>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
      </S.SideRight>
    </S.Page>
  );
};

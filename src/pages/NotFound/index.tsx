import * as S from './styles';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <S.Container>
      <S.BackgroundArt src="/assets/art/artBackgroundNotFoundPage.png" />
      <S.HeaderContainer>
        <Link to="/">
          <S.LogoImage
            alt="Logo Raro Academy. Com ícone de capelo e escrito Raro Academy"
            src="/assets/logo/logoHorizontal-raroAcademy-white.svg"
          />
        </Link>
      </S.HeaderContainer>

      <S.WrapText>
        <h1>404</h1>
        <h3>Desculpa, mas essa página não existe</h3>
        <Link to="/">
          <a>Ir à página inicial</a>
        </Link>
      </S.WrapText>
    </S.Container>
  );
};

export default NotFound;

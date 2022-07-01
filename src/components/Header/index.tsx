import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useAuth } from '../../store/auth';
import { UserMenu } from '../UserMenu';
import * as S from './styles';

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleRedirectHome = () => {
    navigate('/');
  };

  const handleRedirectLogin = () => {
    navigate('/login');
  };

  return (
    <S.HeaderContainer>
      <S.LogoButton type="button" onClick={handleRedirectHome}>
        <S.LogoImage
          src="/assets/logo/logoHorizontal-raroAcademy.svg"
          alt="Logo da Raro Academy, com ícone de capelo e escrito Raro Academy"
        />
      </S.LogoButton>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <PrimaryButton
          type="button"
          text="Login"
          size="small"
          onClick={handleRedirectLogin}
        />
      )}
    </S.HeaderContainer>
  );
};

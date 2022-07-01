import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import * as S from './styles';

export const UserDropdown = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.UserPicture src={user?.foto} alt={`Foto de ${user?.nome}`} />
      <S.UserInfo>
        <S.UserName>{user?.nome}</S.UserName>
        <S.UserEmail>{user?.email}</S.UserEmail>
      </S.UserInfo>
      <S.ActionsMenuLeft>
        <S.ActionItemLeft onClick={handleGoHome}>Home</S.ActionItemLeft>
      </S.ActionsMenuLeft>
      <S.ActionsMenu>
        <S.ActionItem onClick={handleLogout}>Logout</S.ActionItem>
      </S.ActionsMenu>
    </S.Container>
  );
};

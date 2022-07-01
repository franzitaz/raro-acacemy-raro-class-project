import * as S from './styles';
import { Link } from 'react-router-dom';

export const LinkHome = () => {
  return (
    <S.Link>
      <Link to={'/'}>Voltar para a Home</Link>
    </S.Link>
  );
};

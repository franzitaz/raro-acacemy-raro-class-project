import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { Video } from '../../types/Video';
import { FavoriteButton } from '../FavoriteButton';
import ScrollSign from '../ScrollSign';

import * as S from './styles';

type CardVideoProps = {
  videoRecomendedData: Video;
  fixedWidth?: boolean;
};

export const CardLinkClass = forwardRef<HTMLAnchorElement, CardVideoProps>(
  ({ videoRecomendedData, fixedWidth }, ref) => {
    const { id, nome, duracao } = videoRecomendedData;

    const { isAuthenticated } = useAuth();

    return (
      <Link to={`/video/${id}`} ref={ref}>
        <S.Container fixedWidth={fixedWidth}>
          {isAuthenticated && (
            <FavoriteButton
              video={videoRecomendedData}
              defaultColor="primary"
            />
          )}
          <S.WrapInfo>
            <ScrollSign>
              <S.Title>{nome}</S.Title>
            </ScrollSign>
            <S.WrapIconInfo>
              <img
                src="/assets/icon/icon-playDecoration.svg"
                alt="Play Aula Decoração"
              />
              <S.VideoTimeLenght>{duracao}</S.VideoTimeLenght>
            </S.WrapIconInfo>
          </S.WrapInfo>
        </S.Container>
      </Link>
    );
  }
);

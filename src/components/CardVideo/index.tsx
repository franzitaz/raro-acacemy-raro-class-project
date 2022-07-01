import * as S from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { forwardRef } from 'react';
import ScrollSign from '../ScrollSign';
import { Video } from '../../types/Video';
import { formataDate } from '../../helpers/date';
import { FavoriteButton } from '../FavoriteButton';

type CardVideoProps = {
  classData: Video;
  fixedWidth?: boolean;
};

export const CardVideo = forwardRef<HTMLAnchorElement, CardVideoProps>(
  ({ classData, fixedWidth }, ref) => {
    const { id, thumbUrl, nome, dataPublicacao, duracao } = classData;

    const { isAuthenticated } = useAuth();

    return (
      <Link to={`/video/${id}`} ref={ref}>
        <S.Container fixedWidth={fixedWidth}>
          <S.VideoField backgroundImg={thumbUrl}>
            {isAuthenticated && <FavoriteButton video={classData} />}
          </S.VideoField>
          <S.TitleWrapper>
            <img src="/assets/icon/icon-playTitle.svg" alt="Play icon" />
            <ScrollSign>
              <S.Title>{nome}</S.Title>
            </ScrollSign>
          </S.TitleWrapper>
          <S.SecondaryInfo>
            {dataPublicacao ? <time>{formataDate(dataPublicacao)}</time> : null}
            <span>•</span>
            <p>{duracao}</p>
          </S.SecondaryInfo>
        </S.Container>
      </Link>
    );
  }
);

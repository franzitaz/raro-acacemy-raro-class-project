import { useRef, useState } from 'react';
import { RowTitle } from '../../components/RowTitle';
import { useFavorites } from '../../store/favorites';
import { CardVideo } from '../CardVideo';
import Carousel from '../Carousel';
import { SkeletonVideosList } from '../Skeleton/SkeletonVideosList';
import * as S from './styles';

type FavoritesSectionProps = {
  isLoading?: boolean;
};

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  isLoading
}) => {
  const [hideFavorites, setHideFavorites] = useState(false);
  const cardRef = useRef(null);

  const { favorites } = useFavorites();

  if (isLoading) {
    return <SkeletonVideosList />;
  }

  return (
    <S.Container>
      <RowTitle
        type="favorite"
        title="Favoritos"
        withHideButton
        onHide={() => setHideFavorites(!hideFavorites)}
      />
      <S.FavoriteVideosWrapper hide={hideFavorites}>
        {favorites.length === 0 ? (
          <S.FavoriteEmptyState>
            <img src={'/assets/icon/icon-starNoFavorites.svg'} />
            <S.TextNoneVideoFavorite>
              Você ainda não tem vídeos favoritos. <br />
              Você pode favoritar um vídeo clicando no ícone de estrela em um
              card ou em uma página de vídeo.
            </S.TextNoneVideoFavorite>
          </S.FavoriteEmptyState>
        ) : (
          <Carousel cardRef={cardRef}>
            {favorites.map((videoFavorite) => (
              <CardVideo
                key={videoFavorite.id}
                ref={cardRef}
                classData={videoFavorite}
                fixedWidth
              />
            ))}
          </Carousel>
        )}
      </S.FavoriteVideosWrapper>
    </S.Container>
  );
};

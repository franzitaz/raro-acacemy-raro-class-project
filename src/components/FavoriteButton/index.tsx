import { useEffect, useState } from 'react';
import { useFavorites } from '../../store/favorites';
import { Video } from '../../types/Video';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Spinner from '../Spinner';

import * as S from './styles';

type FavoriteButtonProps = {
  video: Video;
  defaultColor?: 'white' | 'primary';
};

type FavoriteIconProps = {
  isLoading?: boolean;
  isFavorite?: boolean;
};

const FavoriteIcon: React.FC<FavoriteIconProps> = ({
  isFavorite,
  isLoading
}) => {
  if (isLoading) return <Spinner size={25} />;
  if (isFavorite) return <BsStarFill size={25} />;
  return <BsStar size={25} />;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  video,
  defaultColor = 'white'
}) => {
  const { id } = video;
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isAlreadyFavorited = favorites.find((favorite) => favorite.id === id);
    setIsFavorited(!!isAlreadyFavorited);
  }, [favorites, id]);

  const handleFavorite = async (event: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true);
    event.stopPropagation();
    event.preventDefault();
    if (isFavorited) {
      await removeFavorite(id);
    } else {
      await addFavorite(video);
    }
    setIsLoading(false);
    setIsFavorited(!isFavorited);
  };

  return (
    <S.StarButton
      onClick={handleFavorite}
      isFavorited={isFavorited}
      defaultColor={defaultColor}
    >
      <FavoriteIcon isFavorite={isFavorited} isLoading={isLoading} />
    </S.StarButton>
  );
};

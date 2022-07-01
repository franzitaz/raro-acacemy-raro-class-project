import { Video } from '../../types/Video';
import { CardLinkClass } from '../CardLinkClass';
import * as S from './styles';

type VideoRecomendedListProps = {
  videoRecomended: Video[];
};

export const VideoRecomendedList = ({
  videoRecomended
}: VideoRecomendedListProps) => {
  if (videoRecomended.length === 0) {
    return (
      <S.ContainerVideoRecomendedList>
        <S.EmptyVideosRecomended>
          Não há recomendações de vídeos disponíveis no momento.
        </S.EmptyVideosRecomended>
      </S.ContainerVideoRecomendedList>
    );
  }

  return (
    <S.ContainerVideoRecomendedList>
      {videoRecomended.map((videoRecomendedItems) => (
        <CardLinkClass
          key={videoRecomendedItems.id}
          videoRecomendedData={videoRecomendedItems}
        />
      ))}
    </S.ContainerVideoRecomendedList>
  );
};

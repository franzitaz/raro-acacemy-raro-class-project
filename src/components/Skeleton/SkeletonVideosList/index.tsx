import * as S from './styles';

type SkeletonVideosListprops = {
  onlyVideos?: boolean;
};

export const SkeletonVideosList: React.FC<SkeletonVideosListprops> = ({
  onlyVideos
}) => {
  return (
    <S.Container>
      {!onlyVideos ? (
        <S.Header>
          <S.Logo />
          <S.TitleList />
        </S.Header>
      ) : null}
      <S.Main>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
          <S.VideoData />
        </S.CardContent>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
          <S.VideoData />
        </S.CardContent>
        <S.CardContent>
          <S.CardVideo />
          <S.TitleVideo />
          <S.VideoData />
        </S.CardContent>
      </S.Main>
    </S.Container>
  );
};

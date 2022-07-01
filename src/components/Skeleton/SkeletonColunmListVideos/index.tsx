import * as S from './styles';

export const SkeletonColunmListVideos = () => {
  return (
    <S.RightSide>
      {[...Array(10)].map((_, i) => (
        <S.NextVideoCard key={i} />
      ))}
    </S.RightSide>
  );
};

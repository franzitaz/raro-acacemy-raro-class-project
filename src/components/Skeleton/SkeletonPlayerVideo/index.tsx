import * as S from './styles';

export const SkeletonPlayerVideo = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.CardContentVideo>
          <S.PlayerVideo />
          <S.TitleVideo />
        </S.CardContentVideo>
        <S.CommentField>
          <S.User />
          <S.InputComment />
        </S.CommentField>
        <S.CommentContent>
          <S.User />
          <S.CommentCard>
            <S.Comment />
            <S.Comment />
          </S.CommentCard>
        </S.CommentContent>
        <S.CommentContent>
          <S.User />
          <S.CommentCard>
            <S.Comment />
            <S.Comment />
          </S.CommentCard>
        </S.CommentContent>
      </S.LeftSide>
    </S.Container>
  );
};

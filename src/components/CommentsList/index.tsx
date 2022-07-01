import { CommentCard } from '../CommentCard';
import { Comment } from '../../pages/VideoClass';
import * as S from './styles';

type CommentListProps = {
  comments: Comment[];
  videoId: string;
};

export const CommentList = ({ comments, videoId }: CommentListProps) => {
  if (comments.length === 0) {
    return (
      <S.ContainerCommentList>
        <S.EmptyComments>
          Não há comentários disponíveis neste vídeo.
        </S.EmptyComments>
      </S.ContainerCommentList>
    );
  }

  return (
    <S.ContainerCommentList>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} videoId={videoId} />
      ))}
    </S.ContainerCommentList>
  );
};

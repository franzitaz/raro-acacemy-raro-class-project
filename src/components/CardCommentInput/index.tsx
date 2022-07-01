import React, { useState } from 'react';
import * as S from './styles';
import { Comment } from '../../pages/VideoClass';

import api from '../../services/api';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';

type PropsCardCommentInput = {
  videoId: string;
  onComment: (comment: Comment) => void;
};

export const CardCommentInput = ({
  videoId,
  onComment
}: PropsCardCommentInput) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  const handleComment = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data: commentData } = await api.post(
        `/videos/${videoId}/comentarios/`,
        {
          texto: comment
        }
      );
      setComment('');
      onComment({ ...commentData, upVotes: 0, downVotes: 0, meuVote: null });
    } catch (err) {
      console.log({ err });
      toast.error('Erro ao enviar comentário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.UserCard>
        <S.Avatar src={user?.foto} alt="Foto do usuário" />
        <form id="comment-form" onSubmit={handleComment}>
          <S.Input
            onChange={(event) => setComment(event.target.value)}
            value={comment}
            placeholder="Deixe um Comentário.."
          />
        </form>
      </S.UserCard>
      <S.ButtonContainer>
        <S.Button
          disabled={comment === '' || loading}
          type="submit"
          form="comment-form"
        >
          {loading ? <Spinner size={16} /> : 'Comentar'}
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

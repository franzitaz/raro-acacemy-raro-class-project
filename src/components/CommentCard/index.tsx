import * as S from './styles';
import { Comment } from '../../pages/VideoClass';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike
} from 'react-icons/ai';

import api from '../../services/api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../store/auth';
import { formataDateTime } from '../../helpers/date';

type CommentCardProps = {
  comment: Comment;
  videoId: string;
};

export const CommentCard = ({ comment, videoId }: CommentCardProps) => {
  const {
    id: commentId,
    aluno,
    downVotes,
    upVotes,
    texto,
    meuVote,
    createdAt
  } = comment;
  const { isAuthenticated } = useAuth();

  const [isLiked, setIsLiked] = useState(meuVote?.vote === 'up');
  const [isDisliked, setIsDisliked] = useState(meuVote?.vote === 'down');

  const [totalUpVotes, setTotalUpVotes] = useState(upVotes);
  const [totalDownVotes, setTotalDownVotes] = useState(downVotes);

  const handleLike = async () => {
    try {
      if (isLiked) {
        setTotalUpVotes((prevVotes) => prevVotes - 1);
        setIsLiked(false);
        await api.delete(`/videos/${videoId}/comentarios/${commentId}/votes`);
        return;
      }
      if (isDisliked) {
        setTotalDownVotes((prevVotes) => prevVotes - 1);
      }
      setTotalUpVotes((prevVotes) => prevVotes + 1);
      setIsLiked(true);
      setIsDisliked(false);
      await api.put(`/videos/${videoId}/comentarios/${commentId}/votes`, {
        vote: 'up'
      });
    } catch (err) {
      console.log({ err });
      toast.error('Erro ao computar seu upvote');
    }
  };

  async function handleDislike() {
    try {
      if (isDisliked) {
        setTotalDownVotes((prevVotes) => prevVotes - 1);
        setIsDisliked(false);
        await api.delete(`/videos/${videoId}/comentarios/${commentId}/votes`);
        return;
      }
      if (isLiked) {
        setTotalUpVotes((prevVotes) => prevVotes - 1);
      }
      setTotalDownVotes((prevVotes) => prevVotes + 1);
      setIsDisliked(true);
      setIsLiked(false);
      await api.put(`/videos/${videoId}/comentarios/${commentId}/votes`, {
        vote: 'down'
      });
    } catch (err) {
      console.log({ err });
      toast.error('Erro ao computar seu downvote');
    }
  }

  return (
    <S.Container>
      <S.Avatar src={aluno.foto} alt="imagem de perfil do usuário" />
      <S.Info>
        <S.TitleWrapper>
          <S.UserName>{aluno.nome}</S.UserName>
          <S.CommentDate>{formataDateTime(createdAt)}</S.CommentDate>
        </S.TitleWrapper>
        <S.Comment>{texto}</S.Comment>
        <S.ReactComment>
          <button onClick={handleLike} disabled={!isAuthenticated}>
            {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
            {totalUpVotes}
          </button>
          <button onClick={handleDislike} disabled={!isAuthenticated}>
            {isDisliked ? (
              <AiFillDislike size={20} />
            ) : (
              <AiOutlineDislike size={20} />
            )}
            {totalDownVotes}
          </button>
        </S.ReactComment>
      </S.Info>
    </S.Container>
  );
};

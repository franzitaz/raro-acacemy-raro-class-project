import { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import * as S from './styles';
import { SkeletonPlayerVideo } from '../../components/Skeleton/SkeletonPlayerVideo';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import DivideLine from '../../components/DivideLine';
import { CommentList } from '../../components/CommentsList';
import { VideoRecomendedList } from '../../components/VideoRecomendedList';
import { SkeletonColunmListVideos } from '../../components/Skeleton/SkeletonColunmListVideos';
import { formataDate } from '../../helpers/date';
import { FavoriteButton } from '../../components/FavoriteButton';
import { Video } from '../../types/Video';
import { useAuth } from '../../store/auth';
import { CardCommentInput } from '../../components/CardCommentInput';
import { toast } from 'react-toastify';
import { useFavorites } from '../../store/favorites';
import ScrollToTopButton from '../../components/ScrollToTopButton';

type Aluno = {
  id: string;
  admin: boolean;
  nome: string;
  email: string;
  senha: string;
  foto: string;
};

export type Comment = {
  id: string;
  texto: string[];
  aluno: Aluno;
  upVotes: number;
  downVotes: number;
  meuVote: {
    id: string;
    vote: 'up' | 'down';
    aluno: Aluno;
  };
  createdAt: string;
};

export const LoadingVideoPage = () => (
  <S.Container>
    <S.ContainerLeft>
      <S.ContainerPLayerVideo>
        <SkeletonPlayerVideo />
      </S.ContainerPLayerVideo>
    </S.ContainerLeft>
    <S.ContainerRight>
      <SkeletonColunmListVideos />
    </S.ContainerRight>
  </S.Container>
);

export const VideoClass = () => {
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingInfos, setLoadingInfos] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { loadingFetchFavorites } = useFavorites();
  const { isAuthenticated } = useAuth();

  const [videoUrl, setVideoUrl] = useState();
  const [videoThumbnail, setVideoThumbnail] = useState();
  const [videoApi, setVideoApi] = useState<Video>();

  const handleComment = (comment: Comment) => {
    setComments([comment, ...comments]);
  };

  const loadVideoInfo = useCallback(async () => {
    const response = await api.get(`/videos/${id}`);
    setVideoUrl(response.data.url);
    setVideoThumbnail(response.data.thumbUrl);
    setVideoApi(response.data);
  }, [id]);

  const loadComments = useCallback(async () => {
    const responseComments = await api.get(`/videos/${id}/comentarios`);
    setComments(responseComments.data.reverse());
  }, [id]);
  const loadRecommended = useCallback(async () => {
    const responseRecommended = await api.get(`/videos/${id}/recomendacoes`);
    setRecommendedVideos(responseRecommended.data);
  }, [id]);

  const loadData = useCallback(async () => {
    setLoadingInfos(true);
    try {
      await loadVideoInfo();
      await loadRecommended();
      await loadComments();
    } catch (err) {
      console.log({ err });
      if (err.response.status === 404) {
        toast.error(
          'Video não encontrado ou você não tem permissão para acessá-lo'
        );
        navigate('/');
      }
    } finally {
      setLoadingInfos(false);
    }
  }, [loadComments, loadRecommended, loadVideoInfo, navigate]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const loading = loadingInfos || loadingFetchFavorites;

  if (loading || !videoApi) {
    return <LoadingVideoPage />;
  }

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ContainerPLayerVideo>
          <ReactPlayer
            className={'react-player'}
            url={videoUrl}
            light={videoThumbnail}
            height="auto"
            width="100%"
            controls={true}
            playing={true}
            playIcon={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'rgb(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center'
                }}
              >
                <button style={{ background: 'transparent', border: 'none' }}>
                  <img
                    src={'/assets/icon/icon-playVideo.svg'}
                    alt="Play vídeo"
                  />
                </button>
              </div>
            }
          />
          <S.WrapInfo>
            {isAuthenticated ? (
              <S.Star>
                <FavoriteButton video={videoApi} defaultColor="primary" />
              </S.Star>
            ) : (
              <S.PlayIcon
                src="/assets/icon/icon-playTitle.svg"
                alt="Play icon"
              />
            )}
            <S.WrapTitleDescription>
              <h1>{videoApi?.nome}</h1>
              <h2>{videoApi?.descricao}</h2>
              {videoApi?.dataPublicacao ? (
                <time>{formataDate(videoApi?.dataPublicacao)}</time>
              ) : null}
            </S.WrapTitleDescription>
          </S.WrapInfo>
        </S.ContainerPLayerVideo>
        <DivideLine />
        {isAuthenticated ? (
          <CardCommentInput videoId={videoApi.id} onComment={handleComment} />
        ) : null}
        <CommentList comments={comments} videoId={videoApi.id} />
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.TitleRecommended>
          <p>Vídeos Recomendados</p>
        </S.TitleRecommended>
        <VideoRecomendedList videoRecomended={recommendedVideos} />
      </S.ContainerRight>
      <ScrollToTopButton />
    </S.Container>
  );
};

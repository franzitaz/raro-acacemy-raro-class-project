import { ClassesFilter } from '../pages/Home';
import api from '../services/api';
import { Video } from '../types/Video';

type GetClassesProps = {
  filters?: ClassesFilter;
};

export const getMultipleClassesByTopic = async () => {
  const [
    { data: classesData },
    { data: tutoringClassesData },
    { data: openClassesData }
  ] = await Promise.all([
    api.get<Video[]>('/videos', {
      params: { topico: 'semana 01' }
    }),
    api.get<Video[]>('/videos', {
      params: { topico: 'monitoria' }
    }),
    api.get<Video[]>('/videos', { params: { topico: 'aulão' } })
  ]);

  return {
    classesData,
    tutoringClassesData,
    openClassesData
  };
};

export const getClasses = async ({ filters }: GetClassesProps) => {
  const res = await api.get<Video[]>('/videos', {
    params: { ...filters }
  });

  return res.data;
};

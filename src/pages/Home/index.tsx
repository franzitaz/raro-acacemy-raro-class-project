import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ClassesSection } from '../../components/ClassesSection';
import DivideLine from '../../components/DivideLine';
import { FavoritesSection } from '../../components/FavoritesSection';
import { Footer } from '../../components/Footer';
import { getMultipleClassesByTopic, getClasses } from '../../fetch/videos';
import { useAuth } from '../../store/auth';
import { useFavorites } from '../../store/favorites';
import { Video } from '../../types/Video';
import * as S from './styles';

export type ClassesFilter = {
  topico?: string;
  tags?: string[];
  nome?: string;
  orderBy?: string;
  pagina?: number;
  itensPorPagina?: number;
  orderDirection?: 'ASC' | 'DESC';
};

export const Home = () => {
  const [classes, setClasses] = useState<Video[]>([]);
  const [openClasses, setOpenClasses] = useState<Video[]>([]);
  const [tutoringClasses, setTutoringClasses] = useState<Video[]>([]);
  const [classesFilters, setClassesFilters] = useState<ClassesFilter | null>(
    null
  );

  const [loadingClasses, setLoadingClasses] = useState(true);
  const [loadingClassesFilter, setLoadingClassesFilter] = useState(false);

  const { isAuthenticated } = useAuth();
  const { loadingFetchFavorites } = useFavorites();

  const loadAllClasses = useCallback(async () => {
    const { classesData, tutoringClassesData, openClassesData } =
      await getMultipleClassesByTopic();

    setClasses(classesData);
    setTutoringClasses(tutoringClassesData);
    setOpenClasses(openClassesData);
  }, []);

  const loadOpenClasses = useCallback(async () => {
    const classesData = await getClasses({});

    setOpenClasses(classesData);
  }, []);

  const loadData = useCallback(async () => {
    setLoadingClasses(true);
    try {
      if (isAuthenticated) {
        await loadAllClasses();
      } else {
        await loadOpenClasses();
      }
    } catch (err) {
      console.log({ err });
      toast.error('Erro ao carregar seus vídeos');
    } finally {
      setLoadingClasses(false);
    }
  }, [isAuthenticated, loadAllClasses, loadOpenClasses]);

  // Pega todas as informações ao carregar a página
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Filtra as aulas
  useEffect(() => {
    if (!classesFilters) return;
    const filterClasses = async () => {
      setLoadingClassesFilter(true);
      try {
        const filteredData = await getClasses({ filters: classesFilters });
        setClasses(filteredData);
      } catch (err) {
        console.log({ err });
        toast.error('Erro ao filtrar as aulas');
      } finally {
        setLoadingClassesFilter(false);
      }
    };

    filterClasses();
  }, [classesFilters]);

  const handleTopicFilter = (topic: string) => {
    setClassesFilters((prevState) => {
      if (prevState) {
        return { ...prevState, topico: topic };
      }
      return { topico: topic };
    });
  };

  const selectOptions = Array.from(
    { length: 10 },
    (_, i) => `Semana ${`${i + 1}`.padStart(2, '0')}`
  );

  const loadingPage = loadingClasses || loadingFetchFavorites;

  return (
    <>
      <S.Container>
        {isAuthenticated ? (
          <>
            <FavoritesSection isLoading={loadingPage} />
            <DivideLine />
            <ClassesSection
              classes={classes}
              title="Aulas do curso"
              topicFilterOptions={selectOptions}
              handleTopicFilter={handleTopicFilter}
              isLoading={loadingPage}
              filterLoading={loadingClassesFilter}
            />
            <DivideLine />
            <ClassesSection
              classes={tutoringClasses}
              title="Monitorias"
              type="tutoring"
              isLoading={loadingPage}
            />
            <DivideLine />
          </>
        ) : null}
        <ClassesSection
          classes={openClasses}
          title="Nossos Aulões"
          type="openClasses"
          isLoading={loadingPage}
        />
      </S.Container>
      <Footer />
    </>
  );
};

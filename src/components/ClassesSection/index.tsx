import { ChangeEvent, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RowTitle } from '../../components/RowTitle';
import { useAuth } from '../../store/auth';
import { Video } from '../../types/Video';
import { CardVideo } from '../CardVideo';
import Carousel from '../Carousel';
import { SkeletonVideosList } from '../Skeleton/SkeletonVideosList';
import * as S from './styles';

type ClassesSectionProps = {
  title: string;
  classes: Video[];
  topicFilterOptions?: string[];
  handleTopicFilter?: (topic: string) => void;
  filterLoading?: boolean;
  type?: 'class' | 'tutoring' | 'openClasses' | 'favorite';
  isLoading?: boolean;
};

type RowContentProps = {
  isLoading?: boolean;
  classes: Video[];
  hasFilter?: boolean;
  cardRef?: React.RefObject<HTMLAnchorElement>;
};

const RowContent: React.FC<RowContentProps> = ({
  isLoading,
  classes,
  hasFilter,
  cardRef
}) => {
  if (isLoading) {
    return <SkeletonVideosList onlyVideos />;
  }

  if (classes.length === 0) {
    return (
      <S.EmptyMessage>
        {hasFilter
          ? `Não há aulas disponíveis para essa semana ainda. `
          : `Não há aulas disponíveis ainda. `}
        Cheque novamente mais tarde.
      </S.EmptyMessage>
    );
  }

  return (
    <S.ClassesWrapper>
      <Carousel cardRef={cardRef}>
        {classes.map((classItem) => (
          <CardVideo
            key={classItem.id}
            ref={cardRef}
            classData={classItem}
            fixedWidth
          />
        ))}
      </Carousel>
    </S.ClassesWrapper>
  );
};

export const ClassesSection: React.FC<ClassesSectionProps> = ({
  classes,
  title,
  topicFilterOptions,
  handleTopicFilter,
  filterLoading,
  isLoading,
  type = 'class'
}) => {
  const cardRef = useRef(null);
  const { isAuthenticated } = useAuth();

  if (isLoading) {
    return <SkeletonVideosList />;
  }

  if (!isAuthenticated) {
    return (
      <S.Container>
        <RowTitle title={title} level={1} type="openClasses" />
        <S.OpenClassesWrapper>
          {classes.map((classItem) => (
            <CardVideo key={classItem.id} classData={classItem} />
          ))}
        </S.OpenClassesWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.RowContainer>
        <RowTitle title={title} type={type} />
        {topicFilterOptions ? (
          <S.SelectContainer>
            <S.Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                handleTopicFilter?.(e.target.value)
              }
            >
              {topicFilterOptions.map((option) => (
                <S.Option key={option} value={option}>
                  {option}
                </S.Option>
              ))}
            </S.Select>
            <MdKeyboardArrowDown size={20} />
          </S.SelectContainer>
        ) : null}
      </S.RowContainer>
      <RowContent
        isLoading={filterLoading}
        classes={classes}
        hasFilter={!!topicFilterOptions}
        cardRef={cardRef}
      />
    </S.Container>
  );
};

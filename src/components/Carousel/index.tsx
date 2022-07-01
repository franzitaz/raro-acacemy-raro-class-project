import {
  ReactNode,
  UIEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import * as S from './styles';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useWindowResize } from '../../hooks/useWindowResize';

interface CarouselTypes {
  children: ReactNode[];
  cardRef?: React.RefObject<HTMLElement>;
}

const Carousel = ({ children, cardRef }: CarouselTypes) => {
  const [childWidth, setChildWidth] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const size = useWindowResize({
    width: 0,
    height: 0
  });

  const checkScrollEndAndStart = useCallback(() => {
    if (!container || !container.current) return;

    // Valores máximos e mínimos que currentScroll pode obter
    const maxCurrentScroll =
      currentScroll ===
      container?.current?.scrollWidth -
        container?.current?.clientWidth +
        childWidth;
    const minCurrentScroll = 0 === currentScroll;

    const isLeftScrollable =
      !minCurrentScroll && container.current.scrollLeft !== 0;
    const isRightScrollable =
      !maxCurrentScroll &&
      container.current.scrollLeft !==
        container.current.scrollWidth - container.current.offsetWidth;

    isLeftScrollable
      ? setIsLeftButtonVisible(true)
      : setIsLeftButtonVisible(false);
    isRightScrollable
      ? setIsRightButtonVisible(true)
      : setIsRightButtonVisible(false);
  }, [currentScroll, childWidth]);

  const handleScrollRight = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Scroll Horizontal Atual + Tamanho do Card * Número de Cards na tela
    const newScroll =
      currentScroll +
      childWidth * (Math.floor((size?.width ?? 0) / childWidth) || 1);
    container?.current?.scroll({
      left: newScroll,
      behavior: 'smooth'
    });

    // Não setar o currentScroll com valores acima do maxScroll
    if (
      container?.current &&
      newScroll + container?.current?.clientWidth >
        container?.current?.scrollWidth
    ) {
      setCurrentScroll(
        container?.current?.scrollWidth -
          container?.current?.clientWidth +
          childWidth
      );
    } else {
      setCurrentScroll(newScroll);
    }
  };

  const handleScrollLeft = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // Scroll Horizontal - Tamanho do Card * Número de Cards na tela
    const newScroll =
      currentScroll -
      childWidth * (Math.floor((size?.width ?? 0) / childWidth) || 1);
    container?.current?.scroll({
      left: newScroll,
      behavior: 'smooth'
    });

    // Valor mínimo é 0
    if (newScroll < 0) {
      setCurrentScroll(0);
    } else {
      setCurrentScroll(newScroll);
    }
  };

  useEffect(() => {
    if (container.current) {
      const allChildren = children;
      if (allChildren.length > 0) {
        setChildWidth(cardRef?.current?.clientWidth || 0);
      }
    }

    checkScrollEndAndStart();
  }, [cardRef, checkScrollEndAndStart, children]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkScrollEndAndStart();
    }, 300);

    return () => clearTimeout(timeout);
  }, [checkScrollEndAndStart, currentScroll, size]);

  return (
    <S.Carousel
      ref={container}
      onScroll={(e: UIEvent<HTMLDivElement>) => {
        setCurrentScroll(e.currentTarget.scrollLeft);
      }}
    >
      <S.Container id="carousel-container">{children}</S.Container>
      {isLeftButtonVisible ? (
        <S.ArrowLeft onClick={handleScrollLeft}>
          <FiChevronLeft />
        </S.ArrowLeft>
      ) : null}
      {isRightButtonVisible ? (
        <S.ArrowRight onClick={handleScrollRight}>
          <FiChevronRight />
        </S.ArrowRight>
      ) : null}
    </S.Carousel>
  );
};

export default Carousel;

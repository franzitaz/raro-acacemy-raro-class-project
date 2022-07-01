import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import * as S from './styles';

const ScrollToTopButton: React.FC<
  Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>
> = (props) => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  };

  const onScroll = (e: Event) => {
    if (((e.target as Document)?.scrollingElement?.scrollTop || 0) >= 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <S.ScrollToTopButtonStyled
      {...props}
      buttonVisible={showButton}
      onClick={handleScrollToTop}
      title="Voltar ao topo da página"
    >
      <FiArrowUp size={18} />
    </S.ScrollToTopButtonStyled>
  );
};

export default ScrollToTopButton;

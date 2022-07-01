import { cloneElement, useEffect, useRef, useState } from 'react';
import * as S from './styles';

const ScrollSign: React.FC<{
  children: React.ReactElement;
  isEventHeading?: boolean;
}> = (props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fullWidth, setFullWidth] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const scrollSpeedFactor = 100; // Maior = scroll mais rápido

  const updateStates = () => {
    if (scrollRef.current) {
      setFullWidth(scrollRef.current?.scrollWidth);
      setOffsetWidth(
        scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth
      );
    }
  };

  useEffect(() => {
    updateStates();
  }, []);

  return (
    <S.ScrollSignWrapper
      scrollSpeedFactor={scrollSpeedFactor}
      fullWidth={fullWidth}
      offsetWidth={offsetWidth}
      className="title-content"
    >
      <div className="title-content">
        {props.children
          ? cloneElement(props.children, { ref: scrollRef })
          : null}
      </div>
    </S.ScrollSignWrapper>
  );
};

export default ScrollSign;

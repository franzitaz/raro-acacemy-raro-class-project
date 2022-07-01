import * as S from './styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

type RowTitleProps = {
  title: string;
  type?: 'class' | 'favorite' | 'tutoring' | 'openClasses';
  level?: 1 | 2;
  withHideButton?: boolean;
  onHide?: () => void;
};

export const RowTitle: React.FC<RowTitleProps> = ({
  title,
  type = 'class',
  level = 2,
  withHideButton,
  onHide
}) => {
  const [buttonHideOrShow, setButtonHideOrShow] = useState(true);

  const handleHide = () => {
    setButtonHideOrShow(!buttonHideOrShow);
    onHide?.();
  };

  const getCorrectIconSrc = () => {
    switch (type) {
      case 'class':
        return '/assets/art/artIcon-logoHatRaroAcademy.svg';
      case 'favorite':
        return '/assets/art/artIcon-starPreenchida.svg';
      case 'tutoring':
        return '/assets/art/artIcon-checkList.svg';
      case 'openClasses':
        return '/assets/art/artIcon-megaPhone.svg';
    }
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Icon src={getCorrectIconSrc()} type={type} />
        <S.Title as={level === 1 ? 'h1' : 'h2'}>{title}</S.Title>
      </S.TitleWrapper>

      {withHideButton ? (
        <S.WrapButtonShowOrHide>
          <S.ButtonShowOrHide type="button" onClick={handleHide}>
            {buttonHideOrShow ? (
              <>
                Esconder
                <MdKeyboardArrowUp size={25} />
              </>
            ) : (
              <>
                Mostrar
                <MdKeyboardArrowDown size={25} />
              </>
            )}
          </S.ButtonShowOrHide>
        </S.WrapButtonShowOrHide>
      ) : null}
    </S.Container>
  );
};

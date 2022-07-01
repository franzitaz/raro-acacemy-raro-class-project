import * as S from './styles';
import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type DividedTextLayoutProps = {
  children: ReactNode;
  title: string;
  subTitle?: string;
  linkparagrafo1: {
    url: string;
    text: string;
  };
  linkparagrafo2?: {
    url: string;
    text: string;
  };
  icon?: ReactElement<IconType>;
  iconRight?: ReactElement<IconType>;
  linkHome?: ReactNode;
};

export const DividedTextLayout = ({
  children,
  title,
  subTitle,
  linkparagrafo1,
  linkparagrafo2,
  icon,
  iconRight,
  linkHome
}: DividedTextLayoutProps) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
      <S.ListInputs>{children}</S.ListInputs>
      <S.LinksParagrafo>
        <S.LinkParagrafo1>
          <Link to={linkparagrafo1.url}>
            {icon}
            {linkparagrafo1.text}
          </Link>
        </S.LinkParagrafo1>
        {linkparagrafo2 ? (
          <S.LinkParagrafo2>
            <Link to={linkparagrafo2?.url as string}>
              {linkparagrafo2?.text}
              {iconRight}
            </Link>
          </S.LinkParagrafo2>
        ) : null}
      </S.LinksParagrafo>
      <S.Footer>
        {linkHome}
        <S.FooterText1>
          <a href="#">Termos de Uso</a>
          <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
          <a href="#">Política de Privacidade</a>
        </S.FooterText1>
        <S.FooterText2>© 2022 Raro Labs</S.FooterText2>
      </S.Footer>
    </>
  );
};

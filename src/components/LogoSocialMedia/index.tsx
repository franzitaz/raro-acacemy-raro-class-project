import * as S from './styles';

type LogoSocialMediaProps = {
  src: string;
  alt: string;
};

const LogoSocialMedia = ({ src, alt }: LogoSocialMediaProps) => {
  return <S.LogoScMedia src={src} alt={alt} />;
};

export default LogoSocialMedia;

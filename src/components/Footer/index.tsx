import LogoSocialMedia from '../../components/LogoSocialMedia';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Container>
      <S.WrapIcons>
        <a
          href="https://discord.com/invite/eVf858gKwn"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoDiscord.svg"
            alt="Logo Discord, aplicativo de áudio e texto, convite para o Discord da Raro Academy"
          />
        </a>
        <a
          href="https://www.facebook.com/raroacademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoFacebook.svg"
            alt="Logo Facebook, rede social, Facebook da Raro Academy"
          />
        </a>
        <a
          href="https://www.instagram.com/raroacademy/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoInstagram.svg"
            alt="Logo Instagram, rede social, Instagram da Raro Academy"
          />
        </a>
        <a
          href="https://www.raroacademy.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <S.StarIcon>
            <LogoSocialMedia
              src="/assets/icon/socialMedia/icon-logoRaroAcademy.svg"
              alt="Logo Raro Academy, curso online, Logo da sede da Raro Academy"
            />
          </S.StarIcon>
        </a>

        <a
          href="https://www.linkedin.com/showcase/raroacademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoLinkedin.svg"
            alt="Logo Linkedin, rede social de negócios, Linkedin da Raro Academy"
          />
        </a>
        <a
          href="https://twitter.com/RaroAcademy"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoTwitter.svg"
            alt="Logo Twitter, rede social, Twitter da Raro Academy"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCAUAbOc54PreKLahvnt5jrw"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocialMedia
            src="/assets/icon/socialMedia/icon-logoYouTube.svg"
            alt="Logo Youtube, rede social de vídeos, Youtube da Raro Academy"
          />
        </a>
      </S.WrapIcons>

      <S.WrapText>
        <S.TermsPrivacyLink>
          <a href="#">Termos de Uso</a>
          <span>•</span>
          <a href="#">Política de Privacidade</a>
        </S.TermsPrivacyLink>
        <p>© 2022 Raro Labs</p>
      </S.WrapText>
    </S.Container>
  );
};

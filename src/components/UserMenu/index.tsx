import { useCallback, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useAuth } from '../../store/auth';
import { UserDropdown } from '../UserDropdown';
import * as S from './styles';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { user } = useAuth();

  const userFirstName = user?.nome.split(' ')[0];
  const currentHour = new Date().getHours();
  const greetingByTime =
    currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';
  const greeting = `${greetingByTime}, ${userFirstName}!`;

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <S.Container ref={ref}>
      <S.GreetingMessage>{greeting}</S.GreetingMessage>
      <S.DropdownWrapper>
        <S.DropdownButton type="button" onClick={() => setIsOpen(!isOpen)}>
          <S.UserPicture src={user?.foto} alt={`Foto de ${user?.nome}`} />
          {isOpen ? (
            <MdKeyboardArrowUp size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </S.DropdownButton>
        {isOpen ? <UserDropdown /> : null}
      </S.DropdownWrapper>
    </S.Container>
  );
};

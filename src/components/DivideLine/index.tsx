import * as S from '../DivideLine';
import styled from 'styled-components';

export const WrapLine = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Line = styled.div`
  width: 80%;
  height: auto;
  border: 0.1rem solid rgba(185, 185, 185, 0.2);
  box-shadow: 0px 2px 0px #ffffff;
`;

const DivideLine = () => {
  return (
    <S.WrapLine>
      <S.Line />
    </S.WrapLine>
  );
};

export default DivideLine;

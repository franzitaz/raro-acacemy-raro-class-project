import React from 'react';

import * as S from './styles';

type SpinnerProps = {
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = ({ size = 24 }) => {
  return (
    <S.SpinnerStyles size={size}>
      <div className="cssload-container">
        <div className="cssload-speeding-wheel"></div>
      </div>
    </S.SpinnerStyles>
  );
};

export default Spinner;

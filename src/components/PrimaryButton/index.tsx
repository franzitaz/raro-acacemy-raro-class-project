import Spinner from '../Spinner';
import * as S from './styles';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'fullWidth';
  text: string;
  loading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  size = 'fullWidth',
  loading,
  text,
  ...props
}) => {
  return (
    <S.Button size={size} disabled={!!loading} {...props}>
      {loading ? <Spinner size={19} /> : text}
    </S.Button>
  );
};

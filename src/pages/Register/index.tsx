import { Input } from '../../components/Input';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { PrimaryButton } from '../../components/PrimaryButton';
import { DividedTextLayout } from '../../layouts/DividedTextLayout';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { toast } from 'react-toastify';
import { LinkHome } from '../../components/LinkHome';

export const Register: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validationSchema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    senha: yup.string().required('Campo obrigatório'),
    confirmarSenha: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
    codigoAcesso: yup.string().required('Campo obrigatório')
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const { isSubmitting, errors } = formState;

  const handleRegister = async (userData: FieldValues) => {
    try {
      setErrorMessage('');
      const { nome, email, senha, codigoAcesso } = userData;
      await api.post('/auth/cadastrar', {
        nome,
        email,
        senha,
        codigoAcesso
      });
      toast.success('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (err) {
      console.log({ err });
      if (err.response.status === 400) {
        setErrorMessage('Usuário já cadastrado');
      } else {
        setErrorMessage(
          'Erro ao realizar cadastro. Tente novamente mais tarde'
        );
      }
    }
  };

  return (
    <DividedTextLayout
      title="Cadastre-se"
      subTitle="Venha ser Raro"
      linkparagrafo1={{
        url: '/login',
        text: 'Fazer login'
      }}
      icon={<MdKeyboardArrowLeft size={18} />}
      linkHome={<LinkHome />}
    >
      {errorMessage ? (
        <S.ErrorMessageWrapper>
          <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        </S.ErrorMessageWrapper>
      ) : null}
      <form id="register-form" onSubmit={handleSubmit(handleRegister)}>
        <Input
          name="nome"
          register={register}
          errors={errors.nome}
          placeholder="Nome"
        />
        <Input
          name="email"
          register={register}
          errors={errors.email}
          placeholder="E-mail"
        />
        <Input
          name="senha"
          register={register}
          errors={errors.senha}
          placeholder="Senha"
          isPassword
          type="password"
        />
        <Input
          name="confirmarSenha"
          register={register}
          errors={errors.confirmarSenha}
          placeholder="Confirmar Senha"
          isPassword
          type="password"
        />
        <Input
          name="codigoAcesso"
          register={register}
          errors={errors.codigoAcesso}
          placeholder="Código da Turma"
        />
      </form>
      <PrimaryButton
        size="fullWidth"
        text="Cadastrar"
        type="submit"
        form="register-form"
        loading={isSubmitting}
      />
    </DividedTextLayout>
  );
};

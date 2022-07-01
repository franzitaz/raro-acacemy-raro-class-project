import styled from 'styled-components';

export const ContainerCommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  padding-left: ${({ theme }) => theme.spacing.large};
`;

export const EmptyComments = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.gray};
`;

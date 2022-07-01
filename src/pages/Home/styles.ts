import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxlarge};
  padding-top: ${({ theme }) => theme.spacing.xxlarge};
  padding-bottom: ${({ theme }) => theme.spacing.huge};

  section + div {
    margin-bottom: 0;
  }
`;

export const ClassesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  padding-left: 6.4rem;
`;

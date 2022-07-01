import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;

  display: flex;
  align-items: flex-start;
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    border: solid 3px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at bottom left,
        #4e47c2 -14.58%,
        rgba(126, 188, 223, 0.6) 100%
      );
    background-origin: border-box;
    background-origin: border-box;
    background-clip: content-box, border-box;

    border-radius: ${theme.border.radius.round};
    width: 6rem;
  `};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const CommentDate = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  margin-top: 1rem;
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
  `};
`;

export const Comment = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const ReactComment = styled.div`
  display: flex;
  font-size: 12px;

  ${({ theme }) => css`
    gap: ${theme.spacing.medium};
    button {
      display: flex;
      align-items: flex-end;
      gap: ${theme.spacing.xxsmall};
      color: ${theme.colors.maximumBlue};
      font-weight: ${theme.font.weight.bold};

      &:disabled {
        cursor: default;
      }
    }
  `}
`;

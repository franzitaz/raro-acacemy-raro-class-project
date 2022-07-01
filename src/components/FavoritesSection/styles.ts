import styled from 'styled-components';

export const Container = styled.section``;

export const FavoriteVideosWrapper = styled.div<{ hide?: boolean }>`
  position: relative;
  padding-inline: 6.4rem;
  max-height: ${({ hide }) => (hide ? '0' : '21.8rem')};
  overflow-y: hidden;
  transition: max-height 300ms ease-in-out 0s;
`;

export const FavoriteEmptyState = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextNoneVideoFavorite = styled.p`
  color: ${({ theme }) => theme.colors.secondaryGray};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

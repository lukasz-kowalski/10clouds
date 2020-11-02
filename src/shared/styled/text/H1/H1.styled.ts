import styled from 'styled-components';

export const H1 = styled.h1((p) => ({
  fontSize: p.theme.fontSize.large,
  color: p.theme.colors.white,
  fontWeight: 300,
}));

export const H1Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
`;

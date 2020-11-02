import styled from 'styled-components';

export const Background = styled.div((p) => ({
  position: 'relative',
  height: '100vh',
  background: p.theme.colors.black,
  overflowX: 'hidden',
  zIndex: -2,
}));

export const BackgroundShape = styled.svg((p) => ({
  position: 'absolute',
  zIndex: -1,
}));

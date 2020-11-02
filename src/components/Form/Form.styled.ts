import styled from 'styled-components';

export const FormContainer = styled.div((p) => ({
  background: p.theme.colors.white,
  padding: '1.6rem 1.6rem 8.5rem 1.6rem',
  margin: '3rem 1.6rem 1.6rem 1.6rem',
}));

export const FieldContainer = styled.div((p) => ({
  marginTop: '3rem',
}));

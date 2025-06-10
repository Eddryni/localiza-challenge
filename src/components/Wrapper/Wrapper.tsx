import { ReactNode } from 'react';
import { Header, Footer } from '../index';
import { Container } from '@mui/material';

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Container sx={{ minHeight: '64px', mt: 4 }}>{children}</Container>
      <Footer />
    </>
  );
}

export default Wrapper
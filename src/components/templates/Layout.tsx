import { Outlet } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyles';
import Header from '../organisms/header/Header';
import Footer from '../organisms/footer/Footer';

const getVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

if (typeof window !== 'undefined') {
  getVh();
  window.addEventListener('resize', () => getVh());
}

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

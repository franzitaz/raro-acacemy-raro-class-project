import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useFavorites } from './store/favorites';
import { useEffect } from 'react';
import { useAuth } from './store/auth';

function App() {
  const { fetchFavorites } = useFavorites();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      fetchFavorites();
    }
  }, [isAuthenticated, fetchFavorites]);

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

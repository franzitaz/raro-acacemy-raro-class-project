import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import NotFound from '../pages/NotFound';
import { NewPassword } from '../pages/NewPassword';
import { RecoverPassword } from '../pages/RecoverPassword';
import { VideoClass } from '../pages/VideoClass';
import { DividedLayout } from '../layouts/DividedLayout';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoClass />} />
        </Route>
        <Route path="/" element={<DividedLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/novasenha" element={<NewPassword />} />
          <Route path="/recuperarsenha" element={<RecoverPassword />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

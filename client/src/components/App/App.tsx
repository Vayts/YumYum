import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEMES } from '@constants/themes';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '@src/hooks/hooks';
import { Modal } from '@src/components/Modal/Modal';
import { selectModalType } from '@src/store/modal/selectors';
import CreateRecipePage from '@src/pages/CreateRecipePage/CreateRecipePage';
import Layout from '@hoc/Layout/Layout';
import RequireAuth from '@hoc/RequireAuth/RequireAuth';
import { AppWrapper } from './style';

export const App: React.FC = () => {
  const isModalActive = useAppSelector(selectModalType);

  return (
    <ThemeProvider theme={THEMES.light}>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<CreateRecipePage/>}/>
            <Route path='/' element={<RequireAuth/>} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-center"
          limit={1}
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable={false}
          theme="colored"
        />
        {isModalActive && <Modal/>}
      </AppWrapper>
    </ThemeProvider>
  );
};

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout.tsx';
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

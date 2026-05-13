import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { PanelProvider } from './contexts/PanelContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <PanelProvider>
        <App />
      </PanelProvider>
    </ThemeProvider>
  </StrictMode>,
);

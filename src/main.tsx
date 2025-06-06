// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Setzt MUI-Standards für Reset usw. */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
import React from 'react';
import { Header } from './ui/header';
import { ThemeProvider } from '@mui/material';
import theme from './ui/theme' ;
export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        Hello
      </div>
    </ThemeProvider>
  )
}
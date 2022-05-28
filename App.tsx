
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './src/Dashboard';
import theme from './src/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}



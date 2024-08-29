'use client'

import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 960,
      lg: 1024, // Novo valor para 'lg'
      xl: 1920,
    },
  },
});

import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0EBAFD',
    },
    secondary: {
      main: '#112544',
    },
    text: {
      primary: '#CFD9F7',
      secondary: '#0EBAFD',
    },
  },
  status: {
    danger: '#ff0044',
  },
});

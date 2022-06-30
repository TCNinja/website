import {createTheme} from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ].join(','),
    },
    palette: {
      primary: {
        main: "#ffaf1a"
      },
      secondary: {
        main: '#FF0D1F'
      },
      background: {
        paper: "#f5f5f5",
        default: "#fff"
      }
    },
  });

  export default theme;
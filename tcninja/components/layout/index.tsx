import Header from './header';
import Footer from "./footer/footer";
import { Box, ThemeProvider, createTheme } from '@mui/material';

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box sx={{
        mt: 9
      }} >
        <main>{children}</main>
        <Footer />
      </Box>

    </ThemeProvider>
  )
}

export default Layout;
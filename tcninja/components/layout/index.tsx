import Header from './header';
import Footer from "./footer/footer";
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { lightGreen, purple } from '@mui/material/colors';

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const theme = createTheme({
    palette: {
      primary: purple
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          mt: 9
        }} >
          <main>{children}</main>
          <Footer />
        </Box>
    </ThemeProvider>
  )
}

export default Layout;
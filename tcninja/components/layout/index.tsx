import Header from './header';
import Footer from "./footer/footer";
import { Box, ThemeProvider, createTheme, makeStyles } from '@mui/material';
import theme from '../../styles/theme';
interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const headerHeight = 65; //TODO: add mobile support
  return (
    <ThemeProvider theme={theme}>
        <Header height={headerHeight} />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: '100%',
          mt: `${headerHeight}px`
        }} >
          <main>{children}</main>
        </Box>
      <Footer />  
    </ThemeProvider>
  )
}

export default Layout;
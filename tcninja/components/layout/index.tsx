import Header from './header';
import Footer from "./footer/footer";
import { Box, ThemeProvider, createTheme, makeStyles } from '@mui/material';


interface ILayoutProps {
  children: React.ReactNode
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#eabfff"
    }
  },
});



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
          <Footer />
        </Box>
    </ThemeProvider>
  )
}

export default Layout;
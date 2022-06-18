import Header from './header';
import Footer from "./footer"
import { Box } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateRows: 'repeat(3, 0.75fr)'
    }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
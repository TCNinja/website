import { Box, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserCard from './usercard'
import Link from 'next/link'
import Logo from './logo';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Trading Card Ninja
            </Typography>
          </Link>
          <UserCard />
        </Toolbar>
      </AppBar>
    </Box>
  )
};
export default Header;

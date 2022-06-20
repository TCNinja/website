import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import UserCard from './usercard';
import Logo from "./logo";
import HeaderSearch from './search'
import { Icon, styled } from '@mui/material';

interface INavigationLinks {
  name: string,
  href: string,
  element?: React.ReactNode
}

const navigationLinks: INavigationLinks[] = [
  { name: "Home", href: "/" },
  { name: "Matches", href: "/" }
]

interface IStyledAppBarProps {
  height: number
}

const StyledAppBar = styled(AppBar)<IStyledAppBarProps>(({ height }) => ({
  height: height
}));

const Header = ({height}: IStyledAppBarProps) => {

  return (
    <StyledAppBar position="fixed" height={height}>
      <Toolbar>
      <IconButton href="/">
      <Logo />
      </IconButton>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>
          { navigationLinks.map((item, index) => (
            <IconButton>
            <Link href={item.href} key={index}>
              <Typography variant="h6" component="div" sx={{ m: 2 }} >
                {item.name}
              </Typography>
            </Link>
            </IconButton>
          ))}
          <HeaderSearch />
      </Box>
      <UserCard />
      </Toolbar>
    </StyledAppBar>

  )
}

export default Header;

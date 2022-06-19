import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import UserCard from './usercard';
import Logo from "./logo";
import HeaderSearch from './search'
import { styled } from '@mui/material';

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
        <Logo />
        <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>
          { navigationLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              <Typography variant="h6" component="div" sx={{ m: 2 }} >
                {item.name}
              </Typography>
            </Link>
          ))}
          <HeaderSearch />
      </Box>
      <UserCard />
      </Toolbar>
    </StyledAppBar>

  )
}

export default Header;

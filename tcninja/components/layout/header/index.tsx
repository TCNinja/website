import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import UserCard from './usercard';
import HeaderSearch from './search'

interface INavigationLinks {
  name: string,
  href: string,
  element?: React.ReactNode
}

const navigationLinks: INavigationLinks[] = [
  { name: "About", href: "/" },
  { name: "Home", href: "/" }
]

const Header = () => {

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, alignItems: 'center' }}>
          { navigationLinks.map((item, index) => (
            <Link href={item.href} key={index}>
              <Typography variant="h6" component="div" sx={{ m: 1 }} >
                {item.name}
              </Typography>
            </Link>
          ))}
          <HeaderSearch />
      </Box>
      <UserCard />
      </Toolbar>
    </AppBar>

  )
}

export default Header;

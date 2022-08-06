import React from 'react'
import { Navbar as MantineNavbar, ScrollArea, Stack } from '@mantine/core'
import NavButton from './navButton';
import { BrandTinder, Home, Search } from 'tabler-icons-react';
import NavbarHeader from './header';
import NavbarUser from './user';
import geraltImage from '/public/geralt.jpg'

const NavbarContent = () => {
  return (
    <>
      <MantineNavbar.Section>
        <NavbarHeader />
      </MantineNavbar.Section>
      <MantineNavbar.Section grow mt="md" component={ScrollArea} >
        <Stack>
          <NavButton link="/" icon={<Home />}>
            Home
          </NavButton>
          <NavButton link="/search" icon={<Search />}>
            Search
          </NavButton>
          <NavButton link="/matches" icon={<BrandTinder />}>
            Matches
          </NavButton>
        </Stack>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <NavbarUser name='Ori Daniel' email='ori.daniel2008@gmail.com' imageUri={geraltImage.src}/>
      </MantineNavbar.Section>
    </>
  )
}

export default NavbarContent
import React from 'react'
import { Navbar as MantineNavbar, Navbar } from '@mantine/core'
import styles from '/styles/NavbarContent.module.css'
import NavButton from './navButton';
import { BrandTinder, Home, Search } from 'tabler-icons-react';

const NavbarContent = () => {
  return (
    <>
      <MantineNavbar.Section>
        <NavButton link="/" icon={<Home/>}>
          Home
        </NavButton>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <NavButton link="/search" icon={ <Search/> }>
          Search
        </NavButton>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <NavButton link="/matches" icon={ <BrandTinder/> }>
          Matches
        </NavButton>
      </MantineNavbar.Section>
    </>
  )
}

export default NavbarContent
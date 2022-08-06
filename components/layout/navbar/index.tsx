import React from 'react'
import { Navbar as MantineNavbar } from '@mantine/core'
import styles from '/styles/navBar.module.css'
import NavButton from './navButton'
import { Home } from 'tabler-icons-react'

const Navbar = () => {
  return (
    <MantineNavbar width={{ sm: 200, lg: 300 }} height='100%' p="xs" className={styles.navbar}>
      <MantineNavbar.Section>
        <NavButton link={"/"}>
          <Home />
          Home
        </NavButton>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
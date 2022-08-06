import React, { ReactNode } from 'react'
import { AppShell, MantineProvider} from '@mantine/core'
import Navbar from './navbar'
import Header from './header'

export interface LayoutProps  { 
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
      <AppShell
        padding="sm"
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
        })}
        header={<Header />}
        navbar={<Navbar />}
        >

        <main>{children}</main>
      </AppShell>
  )
}

export default Layout
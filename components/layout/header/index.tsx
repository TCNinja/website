import React from 'react';
import { Header as MantineHeader} from '@mantine/core';
import Image from 'next/image';
import { ColorSchemeToggle } from './colorSchemeToggle';


const Header = () => {
  return (
    <MantineHeader height='15%' p="xs">
      <ColorSchemeToggle />
    </MantineHeader>
  )
}

export default Header
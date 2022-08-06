import React from 'react';
import { Group, Header as MantineHeader} from '@mantine/core';
import Image from 'next/image';
import logo from '/public/ninja-emoji.svg'
import { ColorSchemeToggle } from './colorSchemeToggle';
import styles from '/styles/header.module.css'


const HeaderContent = () => {
  return (
    <div className={styles.header} aria-label='Header'>
      <div></div>
    </div>
  )
}

export default HeaderContent
import React from 'react';
import { Title, useMantineTheme, Text, MantineProvider } from '@mantine/core';
import Link from 'next/link';
import logo from '/public/ninja-emoji.svg'
import { ColorSchemeToggle } from './colorSchemeToggle';
import styles from '/styles/header.module.css'


const HeaderContent = () => {

  const theme = useMantineTheme()

  return (
    <div className={styles.header} aria-label='Header'>
      <Link href="/" passHref>
        <Text component="a">
        <Title order={2}>
          Trading Card Ninja
        </Title>
        </Text>
      </Link>
    </div>
  )
}

export default HeaderContent
import React, { ReactNode, ReactElement } from "react";
import { Group, Button, Text } from "@mantine/core";
import { NextLink } from '@mantine/next';
import styles from '/styles/navbarButton.module.css'

export interface NavButtonProps {
  icon: ReactNode
  children: ReactNode,
  link: string
}

const NavButton = ({ icon, children, link }: NavButtonProps) => {
  return <Button component={NextLink} href={link}
    id={styles.navbarButton}
    leftIcon={icon}
    variant="subtle">
    <Text>{children}</Text>
  </Button>
}

export default NavButton
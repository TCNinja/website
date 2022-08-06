import React, { ReactNode }  from "react";
import { Group, Button } from "@mantine/core";
import Link from 'next/link'
import { Home } from "tabler-icons-react";

export interface NavButtonProps {
  children: ReactNode,
  link: string
}

const NavButton = ({ children, link }: NavButtonProps) => {
  return <Link href={link}>
    <Button
      variant="light">
      {children}
    </Button>
  </Link>
}

export default NavButton
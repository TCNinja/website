import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import LoginButton from '../components/login-btn';
import { useSession } from "next-auth/react"


const Home: NextPage = () => {
  const { data: session } = useSession()
  return (
    <>
      <h1>Trading Card Ninja</h1>
      <main>
        <LoginButton />
        <Link href={  `user/${session?.user?.email}` }>
        <Button variant='contained'>
          User Data
        </Button>
        </Link>
      </main>

    </>
  )
}

export default Home

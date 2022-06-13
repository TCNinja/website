import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import LoginButton from '../components/login-btn';


const Home: NextPage = () => {
  return (
    <>
      <h1>Trading Card Ninja</h1>
      <main>
        <LoginButton />
        <Button variant='contained'>
          User Data
        </Button>
      </main>

    </>
  )
}

export default Home

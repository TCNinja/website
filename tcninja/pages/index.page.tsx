import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'

const Home: NextPage = () => {
  return (
    <>
      <h1>Trading Card Ninja</h1>
      <Link href='/login'>
        <button>
          Login
        </button>
      </Link>
      <Link href='/user/123'>
        <Button variant='contained'>
          User Data
        </Button>
      </Link>
    </>
  )
}

export default Home

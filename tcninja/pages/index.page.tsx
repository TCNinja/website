import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <h1>Trading Card Ninja</h1>
    <Link href='/login'>
      <button>
        Login
      </button>
    </Link>
    </>
  )
}

export default Home

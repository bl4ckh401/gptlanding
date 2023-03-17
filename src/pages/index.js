import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Hometop from '@/components/Hometop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GPTLetters</title>
        <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
        <meta name="description" content="How to write a cover letter" />
        <meta name="description" content="How to write an NDA" />
        <meta name="description" content="Love letters
            Business letters
            Cover letters
            Thank-you letters
            Recommendation letters
            Apology letters
            Resignation letters." />
        <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
        <meta name="description" content="Create unique and customized letters for any situation with GPTLetters. Our AI-powered platform generates high-quality letters in seconds. Choose from a variety of letter types, including love letters, business letters, cover letters, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hometop/>
    </>
    
  )
}

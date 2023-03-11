import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Hometop from '@/components/Hometop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hometop/>
    </>
    
  )
}

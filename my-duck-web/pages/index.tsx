import Head from 'next/head'
import Image from 'next/image'
import { auth } from '../firebase/clientApp'
import LoginPage from './user/login'

export default function Home() {
  // console.log("auth:", auth)
  return <LoginPage />
}

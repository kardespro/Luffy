import { useRouter } from 'next/router'
import Header from '../components/Static/Header'
import Navbar from '../components/Static/Navbar'
import LoginC from '../components/Errors/Login'
export default function Login(){
  return(
    <>
      <Header />
      <Navbar />
      <LoginC />
    </>
  )
}
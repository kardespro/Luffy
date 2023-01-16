import swr from '../lib/swr.js';
import { useRouter } from 'next/router'
import Header from '../components/Static/Header'
import Navbar from '../components/Static/Navbar'
export default function User(){
  const router = useRouter()
  let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;
  
  return(
    <>
      <Header />
      <Navbar />
      <div className="pt-14 grid_1"></div>
      {user ?(
      <div className="grid_1 py-5 px-3 rounded-md bg-gray-300 border-2 border-black-900 md:grid md:grid-cols-2 md:gap-6">
        <div className="w-full rounded-md w-96">
          {user.banner ? (
        <img src={`https://cdn.discordapp.com/banners/${user.id}/${user.banner}`} className="w-96 rounded-md border-2 top-10" alt={`Luffy | ${user.username}'s Banner`}/>
          ) : <img src={`/static/banner.png`} className="w-96 rounded-md border-2 top-10" alt={`Luffy | ${user.username}'s Banner`}/>}
        </div>
        <div className="md:hidden grid_1 pt-4"></div>
        <div className="w-16 md:hidden">
         <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`} className="rounded-md ml-40"/>
        </div>
        <div className="grid_1 pt-6 text-center">
          <h1 className="text-2xl font-bold">{user.username}#{user.discriminator}</h1>
          {user.id === "682607343707488388" ? (
        <p className="sm:text-xs md:text-xl text-gray-300 font-bold">Luffy Bot Geliştiricisi</p>
          ): <p className="sm:text-xs md:text-xl text-gray-300 font-bold">Luffy Bot Kullanıcısı</p>}
          <div className="grid grid-cols-4 gap-8 object-none object-center pl-44">
           {user.premium_type === 2 ?(
       
           <img src="https://raw.githubusercontent.com/Mattlau04/Discord-SVG-badges/master/SVG/boost1month.svg" className="object-none object-center" />
          
          ): <h1></h1>}
            {user.premium_type === 1 ?(
             <img src="https://raw.githubusercontent.com/Mattlau04/Discord-SVG-badges/master/SVG/nitro.svg"/>
            ) : <h1></h1>}
            {user.premium_type === 3 ? (
             <img src="https://raw.githubusercontent.com/Mattlau04/Discord-SVG-badges/master/SVG/nitro.svg" />
            ) : <h1></h1>}
            <div className="grid_1 pt-4"></div>
           </div>
          <div className="grid_1 pt-4"></div>
          <button className="py-3 px-5 rounded-md bg-violet-600 text-white w-96 hover:bg-violet-600 grid grid-cols-2 gap-44" onClick={() => router.push(`https://discord.com/users/${user.id}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

            Discord</button>
          
        </div>
      </div>
      ) : <h1 className="text-red-600 font-bold text-center"> Please Login </h1>}
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      <div className="pt-24 grid_1"></div>
      
    </>
  )
}
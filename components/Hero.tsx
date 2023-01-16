import swr from '../lib/swr.js';
import { useRouter } from 'next/router'
export default function Hero(){
  const router = useRouter()
  let { data: identify } = swr('/api/@me/identify');	
  let user = identify ? identify.user : null;
  return(
    <div className="pt-20 grid_1">
      <h1 className="text-gray-900 font-bold text-3xl text-center">Luf<span className="text-[#ff5757]">fy</span></h1>
      <p className="text-xs text-center text-gray-400 font-bold">Özellikleri ile Seninle !</p>

      <div className="pt-12 flex justify-center items-center">
      <button className="py-3 px-5 bg-[#ff5757] rounded-md w-64 text-gray-900 shadow-2xl"> Davet et </button>
      
      </div>
      <div className="pt-4"></div>  
     
      <div className="flex justify-center items-center">
        {user ? (
         <button className="py-3 px-5 bg-gray-300 rounded-md w-64 text-gray-900" onClick={() => router.push("/dashboard")}> Kontrol Paneli </button>
     
        ) : <button className="py-3 px-5 bg-gray-300 rounded-md w-64 text-gray-900"> Giriş Yap </button>}
     
      </div>
      
    </div>
  )
}
import swr from '../lib/swr.js';
import { useRouter } from 'next/router'
import Link from 'next/link'
import MoonLoader from "react-spinners/MoonLoader"; 

export default function Hero(){
  const router = useRouter()
  let { data: identify } = swr('/api/@me/identify');	
  let user = identify ? identify.user : null;
  return(
    <div className="pt-20 grid_1">
      <h1 className="text-gray-900 font-bold text-3xl text-center">Luf<span className="text-[#ff5757]">fy</span></h1>
      <p className="text-xs text-center text-gray-400 font-bold">Özellikleri ile Seninle !</p>

<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/invite">
                    <a className="w-full flex items-center justify-center px-8 py-3 px-5 bg-gray-300 rounded-md w-64 text-gray-900 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Davet Et
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  {identify ? (
                    user ? (
                      <Link href="/dashboard">
                        <a className="w-full flex items-center justify-center px-8 py-3 px-5 bg-[#ff5757] rounded-md w-64 text-gray-900  hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                            Dashboard
                        </a>
                      </Link>
                    ) : (
                      <Link href={"/api/auth/login?url=" + router.asPath}>
                        <a className="w-full flex items-center justify-center px-8 py-3 px-5 bg-[#ff5757] rounded-md w-64 text-gray-900 hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                            Giriş Yap
                        </a>
                      </Link>
                    )
                  ) : (
                    <a className="w-full flex items-center justify-center px-8 py-3 px-5 bg-gray-300 rounded-md w-64  hover:text-white transition-all hover:bg-opacity-100 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                      <MoonLoader color="#ff5757" size={20} />
                    </a>
                  )}
                </div>
              </div>

      
          </div>
  )
}
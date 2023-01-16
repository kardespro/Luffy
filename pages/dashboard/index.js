import Header from '../../components/Static/Header'
import Navbar from '../../components/Static/Navbar'
import { useRouter } from 'next/router'
import { ArrowPathRoundedSquare } from '@heroicons/react/24/outline'
import Link from 'next/link'
import useSWR from "swr";
import swr from '../../lib/swr.js';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard(){
  const router = useRouter()

  let { data: identify } = swr('/api/@me/identify');	
  let usernego = identify ? identify.user : null;
  const { data: _user } = useSWR("https://clewybackend.kardespro.repl.co/v1/me", fetcher);
	const user = _user ? _user.data : null;
	if (identify && !usernego) {
		if (typeof window !== "undefined") {
			window.location.href = "/login";
			return <></>;
		};
	};
  
  /*let user = true
  if(!user){
    router.push("/login")
  }*/
  return(
    <>
      <Header />
      <Navbar />
      <div className="pt-20 grid_1"></div>
      <h1 className="text-[#ff5757] text-2xl font-bold text-center grid_1">Dashboard</h1>
      <p className="text-xs text-center text-gray-300 font-bold grid_1">Fast & Modern Dashboard With You</p>
      <div className="pt-4 grid_1"></div>
      <div className="flex justify-center items-center grid_1">
        <button className="bg-[#ff5757] py-3 px-5 w-32 rounded-md grid grid-cols-3 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg> Refresh</button>
      </div>
      <div className="pt-24 grid_1"></div>


      <h1 className="text-2xl pt-24 grid_1 text-[#ff5757] font-bold text-center">Cooming Soon</h1>
    </>
  )
}
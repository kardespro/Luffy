import { useRouter } from 'next/router'

export default function Login(){
  return(
    <div className="grid_1  pt-20">
    <h1 className="text-red-500 text-center grid_1 font-bold text-2xl">Access Denied</h1>
    <p className="text-xs text-gray-300 text-center font-bold grid_1 pt-2">Please Login With Your Discord Account and Contiune</p>
      <div className="pt-24"></div>
      <div className="flex justify-center items-center grid_1">
       <button className=" py-3 px-5 w-64 rounded-md bg-[#ff5757] text-white grid grid-cols-3 gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

         Login</button>
      </div>
       <div className="pt-24"></div>

       <div className="pt-24"></div>

       <div className="pt-24"></div>
        <div className="pt-24"></div>
     
    </div>
  )
}
import Header from '../components/Static/Header'
import Navbar from '../components/Static/Navbar'

import swr from '../lib/swr.js'

export default function Refresh(){
  let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;
  
  return(
    <>
      <Header />
      <Navbar />
      <div className="grid_1 pt-14"></div>
      {user ? (
      <div>
       <h1 className="text-center grid_1 pt-6 font-bold text-[#ff5757]">{user.username}'s Avaliable Data In Website</h1>
      
       <div className=" grid_1 rounded-md border-2 border-gray-300">
         <div className="md:hidden grid_1 pt-4"></div>
         <p className="grid_1 text-left pl-4">User Token : <button className="pl-44 font-bold grid_1" onClick={() => alert(`${user.accessToken}`)}>Click To View</button></p>
         <p className="pt-4 grid_1 text-left pl-4">MFA_ENABLED : <span className="pl-44 font-bold grid_1">Yes</span></p>
       </div>
      </div>
       
      ) : <h1 className="text-red-500 text-center animation-bounce">Loading ...</h1>}
      <div className="grid_1 pt-64"></div>
      <div className="grid_1 pt-64"></div>
      <div className="grid_1 pt-64"></div>
      <div className="grid_1 pt-64"></div>
      <div className="grid_1 pt-64"></div>
    </>
  )
}
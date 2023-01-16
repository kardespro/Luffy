import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router'
import useSWR from "swr";
import swr from '../../lib/swr.js';
import { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const fetcher = (url) => fetch(url).then((res) => res.json());

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
  const router = useRouter()
  let { data: identify } = swr('/api/@me/identify');
	let user = identify ? identify.user : null;
  return(
    <div>
      {/*Mobile Navbar*/}
      <div className="smhidden grid grid-cols-4 gap-4 bg-gray-10 shadow-md rounded-md grid_1">
        <a className="pl-10 font-bold pt-6 text-xl md:pl-12" onClick={() => router.push("/")}>Luf<span className="text-[#ff5757]">fy</span></a>
        <div className="pt-4 pl-40 pr-6 md:pl-64 md:ml-64 ">
          {user ? (
 

          <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="py-3 w-32 px-5 rounded-md shadow-md text-center pl-6 bg-[#ff5757] font-semibold font-sans text-white grid grid-cols-3 gap-2">
          <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=1024`} className="rounded-md border-2 border-[#FFA600]" />
   {user.username}
         
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none grid_1">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => router.push("/user")}
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Destek Sunucusu
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => router.push("/refresh")}
                >
                  Data Yenile
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-red-500' : 'text-red-500',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                    onClick={() => router.push("/api/auth/logout")}
                  >
                    Çıkış Yap
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>



      

        
      ) :  <button className="py-3 w-32 px-5 rounded-md shadow-md text-center pl-6 bg-[#ff5757] font-semibold font-sans text-white" onClick={() => router.push("/api/auth/login")}>Login</button>}
          <div className="pt-2"></div>
     
        </div>
       
         </div>
      {/*Destkop Navbar*/}
      
      
    </div>
  )
}
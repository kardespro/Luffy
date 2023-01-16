import useSWR from "swr";
import MoonLoader from "react-spinners/MoonLoader"; 

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Stats(){
  const { data, error } = useSWR(
    "/api/stats/res",
    fetcher
  );
  if(error) return(<><h1 className="text-red-500 md:pt-24 text-center font-bold grid_1">Server Error : Please Refresh Page</h1><div className="pt-24 grid_1"></div></>)
  if(!data) return(<div className="flex justify-center items-center grid_1"><MoonLoader color="#ff5757"/> <div className="pt-24 grid_1"></div></div>)
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 grid_1">
      <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#ff5757]">Istatistikler</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span>Luf</span><span className="text-[#ff5757]">fy</span> Stats Burada</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Seni Uçuracak Istatistikler Burada
          </p>
        
    </div>
      <div className="pt-9"></div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#ff5757] sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            {data.guilds}
          </h6>
          <p className="mb-2 font-bold text-md">Sunucu</p>
          <p className="text-gray-700">
            Büyümemize Yardımcı Ol !
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#ff5757] sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            {data.users}
          </h6>
          <p className="mb-2 font-bold text-md">Kullanıcı</p>
          <p className="text-gray-700">
            Bizi Kullanan Kullanıcılardan Biri Sen ol !
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#ff5757] sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">{data.cmdSize}</h6>
          <p className="mb-2 font-bold text-md">Komut</p>
          <p className="text-gray-700">
            Sizler Için En iyi komutları Botumuza Eklemekteyiz
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#ff5757] sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">{data.ping} ms</h6>
          <p className="mb-2 font-bold text-md">Gecikme</p>
          <p className="text-gray-700">
            Belkide Daha Hızlı ?
          </p>
        </div>
      </div>
    </div>
  );
};
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Hızlı Ve Konforlu',
    description:
      'Luffy bot sayesinde artık konfora ulaşmak çok kolay, luffy bot sayesinde profilinizi görebilir ve daha bir çok şey yapabilirsiniz.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Her Zaman En Korumalı',
    description:
      'Luffy bot sayesinde her zaman güvendesiniz, luffy bot gelişmiş koruma sistemi ile sunucunuzu koruma altına alır, herhangi bir ping artış durumunda luffy bot sunucunuzun bölgesini değişerek patlamasını önler!',
    icon: ScaleIcon,
  },
  {
    name: '7/24 Aktif',
    description:
      'Luffy bot hostriva bilişim hizmetleri sayesinde 7/24 aktif, herhangi bir bakım süreci olmadığı sürece düşme olmaz!',
    icon: BoltIcon,
  },
  {
    name: 'Mobile Uyumlu Site',
    description:
      'Luffy botun sitesi mobile uyumlu olarak tasarlandı sizlerde mobilde zorluk çekmeden kolay ve konforlu şekilde sitemize ulaşabilirsiniz.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white grid_1 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#ff5757]">Özellikler</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><span>Luf</span><span className="text-[#ff5757]">fy</span> Özellikleri Burada</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Seni Senden Alıcak Özellikler
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff5757] text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

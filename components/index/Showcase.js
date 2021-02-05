import Image from 'next/image'
import ShrinkForm from './ShrinkForm'

// Index SHOWCASE-FORM
export default function Showcase() {
  return (
    <div className="py-20 w-4/5 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/4">
          <h1 className="text-5xl lg:text-6xl font-black tracking-wide text-gray-600">
            <span className="text-green-500">Simple & Minimalist</span> <br />{' '}
            URL Shrinker
          </h1>
          <p className="pt-4 text-2xl md:text-3xl tracking-wide font-light text-gray-500">
            Shorten unlimited long urls for free
          </p>
          <ShrinkForm />
        </div>
        <div className="relative w-full sm:w-1/2 h-96">
          <Image
            src="/showcase.svg"
            layout="fill"
            alt="Better Grue Banner Image"
          />
        </div>
      </div>
    </div>
  )
}

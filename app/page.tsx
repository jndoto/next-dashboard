import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-white">
      
      {/* Top Blue Header */}
      <div className="flex h-20 md:h-52 items-end rounded-lg bg-blue-600 p-4">
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <span className="text-2xl"> </span>
          Prime
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mt-10 flex flex-col md:flex-row gap-10">

        {/* Left Text Panel */}
        <div className="flex flex-col justify-center gap-6 bg-gray-50 rounded-lg px-8 py-12 md:w-2/5">
          <p className="text-xl md:text-3xl text-gray-800 leading-normal">
            <strong>Welcome to Prime Home</strong> Your Gateway to Luxury Stay{' '}
            <a href="https://primeserenity.com" className="text-blue-600">
              Beuatiful Homes in the Heart of Nairobi
            </a>
            , brought to you by Prime Serenity Consult.
          </p>

          <Link
            href="/login"
            className="flex w-fit items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-500 transition"
          >
            Log in <ArrowRightIcon className="w-5" />
          </Link>
        </div>

        {/* Right Hero Preview */}
        <div className="relative flex md:w-3/5 justify-end items-center">

          <Image
            src="/hero-desktop.png"
            width={520}
            height={420}
            className="absolute right-28 top-0 hidden md:block"
            alt="Desktop dashboard preview"
          />

          <Image
            src="/hero-desktop.png"
            width={480}
            height={380}
            className="absolute right-10 top-16 hidden md:block"
            alt="Tablet dashboard preview"
          />

          <Image
            src="/hero-mobile.png"
            width={220}
            height={420}
            className="relative mt-20 hidden md:block"
            alt="Mobile dashboard preview"
          />
        </div>

      </div>
    </main>
  );
}

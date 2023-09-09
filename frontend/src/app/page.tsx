import Image from 'next/image'
import FaqSection from './components/landing/Faq'
import { Footer } from './components/landing/Footer'
import LandingNavbar from './components/common/LandingNavbar'

export default function Home() {

  
  return (
    <div className="h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-grow flex flex-col justify-around bg-black">
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col sm:flex-row items-center relative mb-12">
          {/* Left Col */}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-[#ff0050] font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Welcome to TikTok's digital wallet.</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Connect your finances with anyone, anywhere.</p>

            <p className="text-[#00f2ea] font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Try it today!</p>

            <div className="sm:hidden flex flex-col justify-center items-center gap-y-4">
              <p className='text-white'>Dashboard Page</p>
              <img className="w-3/6  " src="dashboard_mobile.png" alt="Devices" />

              <p className='text-white'>Activities Page</p>
              <img className="w-3/6 " src="activity_mobile.png" alt="Devices" />

              <p className='text-white'>Payment Page</p>
              <img className="w-3/6  " src="preview_mobile.png" alt="Devices" />
          </div>
          </div>

          {/* Right Col */}
          <div className="w-auto xl:w-3/5 py-6 overflow-y-hidden overflow-x-hidden sm:absolute relative right-12 top-0 h-full">
            <div className="relative">
              <img className="w-3/6 mx-auto lg:mr-0 slide-in-bottom absolute top-8 right-64 rotate-[-15deg]" src="dashboard_mobile.png" alt="Devices" />
              <img className="w-3/6 mx-auto lg:mr-0 slide-in-bottom absolute top-4 right-32 rotate-[-7deg]" src="activity_mobile.png" alt="Devices" />
              <img className="w-3/6 mx-auto lg:mr-0 slide-in-bottom absolute top-0 right-0 " src="preview_mobile.png" alt="Devices" />
            </div>
          </div>


        </div>

        <div className='flex-grow'>
          <FaqSection />
        </div>

        <div className='flex-grow bg-white'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

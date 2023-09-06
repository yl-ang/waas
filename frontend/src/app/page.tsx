import Image from 'next/image'
import Navbar from './components/common/Navbar'
import FaqSection from './components/landing/Faq'
import { Footer } from './components/landing/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col space-y-4 justify-around">

        <section className="bg-[#ff0050] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero content */}
            <h1 className="text-white text-4xl font-bold mb-4">
              Welcome to our wallet service!
            </h1>
          </div>
        </section>
        <div className='flex-grow'>
        <FaqSection />
        </div>

        <div className='flex-grow'>
        <Footer />
        </div>
      </main>
    </div>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const navItemStyle: string = "sm:text-sm md:text-base font-normal sm:px-2 md:px-3 active:bg-white/10 transition border-transparent border hover:border hover:transition hover:border-white/20 hover:mx-2 rounded-md px-4 py-2.5 mx-2"
    const burgerItemStyle: string = "text-center text-2xl font-light tracking-wide active:bg-white/10 transition border-transparent border hover:border hover:transition hover:border-white/20 px-7 rounded-md py-5"
    const [backdropMenu, setBackdropMenu] = useState<boolean>(false)
    const router = useRouter();
    const pathname = usePathname();

 


    const backdropToggle = () => {
        setBackdropMenu(!backdropMenu)
    }

    return (
        <div>
            <nav className="relative flex justify-between sm:py-5 xs:h-24 sm:h-fit bg-black w-screen">
                <div className='lg:flex sm:flex-column sm:justify-center md:justify-start'>
                    <div className='w-screen md:flex-column lg:flex items-center text-white font-Hind tracking-wide lg:px-64 px-0'>
                        <div className='sm:w-screen sm:flex sm:justify-center lg:w-20'>
                            <Link href="/" className="">
                                <Image
                                    src="/logo.png"
                                    width={90}
                                    height={4.48}
                                    alt="Wallet"
                                    className='lg:ml-8 xs:ml-4 sm:mb-2 lg:mb-1 xs:mt-5 xs:pt-0.5 sm:mt-1 sm:w-20 hidden lg:flex'
                                />
                            </Link>
                        </div>

                        <div id="navbar-menu" className='xs:hidden sm:flex xs:ml-0 lg:ml-16 w-screen xs:justify-center lg:justify-between'>
                            <div className='flex items-center justify-start'>
                                <Link href="/dashboard" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/dashboard' ? 'bg-[#ff0050] ' : ''} px-5 font-semibold rounded-md py-2`}>
                                    Home
                                </Link>
                                <Link href="/activities" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/activities' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                                    Activity
                                </Link>
                                <Link href="/pay" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/pay' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                                    <div className='flex items-center'>
                                        <h2 className='sm:text-sm md:text-base tracking-wid'>Pay</h2>
                                    </div>
                                </Link>

                            </div>
                            <div className='flex ml-4 items-center xs:mr-0 lg:mr-0'>
                                <Link href="/">
                                    <Image
                                        src="/notification-bell.png"
                                        width={139}
                                        height={163}
                                        alt="notifications bell"
                                        className='w-5 h-6 mr-7 cursor-pointer'
                                        onClick={() => console.log("hh")}
                                    />
                                    {/* { userFound ?
                                        unreadBell
                                        ?
                                        <span className="absolute lg:top-9 lg:right-20 h-2.5 w-2.5 mr-4">
                                            <span className="animate-ping absolute sm:-top-6 sm:-right-3 md:-top-6 md:-right-3 lg:top-2 lg:right-0 inline-flex h-2.5 w-2.5 rounded-md bg-sky-400 opacity-75"></span>
                                            <span className="absolute sm:-top-6 sm:-right-3 md:-top-6 md:-right-3 lg:top-2 lg:right-0 inline-flex rounded-md h-2.5 w-2.5 bg-sky-500"></span>
                                        </span>
                                        :
                                        <div></div>
                                        :
                                        <div></div>
                                    } */}
                                </Link>
                                {/* { !userFound ? (
                                    <Link 
                                        href="/profile/login"
                                        className='font-bold text-white tracking-wider xs:mr-0 lg:mr-12 text-xs'>
                                        LOG IN
                                    </Link>
                                ) : (
                                    <Link 
                                        href="/profile"
                                        className=''>
                                            <Image
                                            src={undefined}
                                            width={25}
                                            height={25}
                                            alt="user icon"
                                            className='w-10 h-10 rounded-md mr-8 cursor-pointer'
                                            /> 
                                    </Link> 
                                )} */}
                            </div>
                        </div>
                        {
                            backdropMenu ?
                            <div className='p-6 xs:absolute sm:hidden top-2 right-4'>
                                <Image
                                    src="/icons/x-icon.png"
                                    width={200}
                                    height={200}
                                    alt="exit out of nav menu"
                                    className='cursor-pointer h-7 w-7'
                                    id='burger-close'
                                    onClick={backdropToggle}
                                />
                            </div>
                            :
                            <div id="burger-menu" className="p-6 xs:absolute sm:hidden top-2 right-4 space-y-2 cursor-pointer"
                                onClick={backdropToggle}
                            >
                                <div className="w-8 h-1 bg-white"></div>
                                <div className="w-8 h-1 bg-white"></div>
                                <div className="w-8 h-1 bg-white"></div>
                            </div>
                        }
                    </div>
                </div>
                
            </nav>
            {
                backdropMenu ?
                <div id="backdrop-menu" className='xs:absolute sm:hidden z-10 opacity-95 bg-black w-screen h-screen'>
                    <div className='font-Hind pt-4 flex-col flex text-white items-center justify-center'>
                        <Link href="/dashboard" onClick={backdropToggle} className={`my-4 text-xl font-normal  ${pathname === '/dashboard' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                            Pay/Request
                        </Link>
                        <Link href="/activities" onClick={backdropToggle} className={`my-4 text-xl font-normal  ${pathname === '/activities' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                            Activity
                        </Link>
                        <Link href="/pay" onClick={backdropToggle} className={`my-4 text-xl font-normal  ${pathname === '/pay' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                                Pay
                        </Link>
                        <div className='flex w-screen justify-center items-center mt-4'>
                                <Link href="/"
                                className="p-4"
                                >
                                    <Image
                                        src="/notification-bell.png"
                                        width={139}
                                        height={163}
                                        alt="notifications bell"
                                        className='w-6 h-7 mr-2 cursor-pointer'
                                        onClick={() =>console.log('sdsd')}
                                    />
                                    
                                </Link>
                               
                            </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}
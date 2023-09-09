'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FaUserAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import SecondaryButton from '../ui/SecondaryButton'
import MenuButton from '../ui/MenuButton'

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
                    <div className='w-screen sm:flex-column lg:flex items-center text-white lg:px-64 md:px-20 px-4'>
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

                        <div id="navbar-menu" className='xs:hidden xs:ml-0 lg:ml-16 w-screen xs:justify-center lg:justify-between hidden sm:flex'>
                            <div className='flex items-center justify-start'>
                                <Link href="/dashboard" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/dashboard' ? 'bg-[#ff0050] ' : ''} px-5 font-semibold rounded-md py-2`}>
                                    Home
                                </Link>
                                <Link href="/activities" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/activities' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                                    Activity
                                </Link>
                                <Link href="/payments/pay" className={`sm:text-sm md:text-base font-normal mr-2 ${pathname === '/payments/pay' || pathname === '/payments/request' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                                    <div className='flex items-center'>
                                        <h2 className='sm:text-sm md:text-base tracking-wid'>Payments</h2>
                                    </div>
                                </Link>

                            </div>
                            <div className='flex ml-4 items-end xs:mr-0 lg:mr-0'>
                                <MenuButton
                                handler={() => router.push("/profile")}
                                loading={false}
                                disabled={false}
                                width={'1/2'} 
                                logo={<FaUserAlt  className="w-6 h-6" />}            
                                >
                                    Profile
                                </MenuButton>
                            </div>
                        </div>
                        {
                            backdropMenu ?
                            <div className='p-6 xs:absolute sm:hidden top-2 right-4'>
                                <RxCross2 className="w-5 h-5" onClick={backdropToggle}/>
                            </div>
                            :
                            <div id="burger-menu" className="p-6 xs:absolute sm:hidden top-2 right-4 space-y-2 cursor-pointer"
                                onClick={backdropToggle}
                            >
                                <GiHamburgerMenu className="w-5 h-5"/>
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
                            Home
                        </Link>
                        <Link href="/activities" onClick={backdropToggle} className={`my-4 text-xl font-normal  ${pathname === '/activities' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                            Activity
                        </Link>
                        <Link href="/payments/pay" onClick={backdropToggle} className={`my-4 text-xl font-normal  ${pathname === '/payments/pay' || pathname === '/payments/request' ? 'bg-[#ff0050]' : ''} px-5 font-semibold rounded-md py-2`}>
                            Payments
                        </Link>
                        <div className='flex w-screen justify-center items-center mt-4'>
                            <MenuButton
                            handler={() => router.push("/profile")}
                            loading={false}
                            disabled={false}
                            width={'1/2'} 
                            logo={<FaUserAlt  className="w-6 h-6" />}            
                            >
                               Profile
                            </MenuButton>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}
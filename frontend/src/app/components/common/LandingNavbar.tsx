'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

import { AiOutlineQrcode, AiFillInstagram, AiFillApple } from 'react-icons/ai';
import { FaTiktok, FaUserAlt } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Modal from "./Modal";

type ClickableProps = {
  href: string;
  children: React.ReactNode;
};

const Clickable: React.FC<ClickableProps> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <span
      className="cursor-pointer link link-underline link-underline-black"
      onClick={handleClick}
    >
      {children}
    </span>
  );
};

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Wallet Logo" width={40} height={40} />
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center w-full">
            <Clickable href="#features">
              <span className="text-gray-800 px-3 py-2">Features</span>
            </Clickable>
            <Clickable href="#faq">
              <span className="text-gray-800 px-3 py-2">FAQ</span>
            </Clickable>
            <Clickable href="#footer">
              <span className="text-gray-800 px-3 py-2">Contact</span>
            </Clickable>
          </div>
          <div className="hidden md:flex justify-end w-full">
            <PrimaryButton
              handler={toggleModal}
              loading={false}
              disabled={false}
              width={'1/2'}
              height={'auto'}
            >
              Log in
            </PrimaryButton>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={toggleModal} footer={
        <>
          <p className="text-[10px] font-extralight px-16 text-gray-400 pb-3 hidden sm:block">
            By continuing, you agree to TikTok’s <a href="https://www.tiktok.com/legal/terms-of-use?lang=en" className="text-gray-600 hover:underline">
              Terms of Service</a> and confirm that you have read TikTok’s <a href="https://www.tiktok.com/legal/privacy-policy?lang=en" className="text-gray-600 hover:underline">Privacy Policy</a>.
          </p>
          <hr></hr>
          <div className="flex flex-row justify-center space-x-2 pt-3 text-sm sm:text-md">
            <p>Don't have an account?</p> 
            <a href="/signup" className="text-[#ff0050]">Sign up</a>
          </div>
        </>
        }>
          <h1 className="text-4xl font-semibold mb-4">Log in to TikTok</h1>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'}
              logo={<AiOutlineQrcode className="w-4 h-4" />} 
            >
              Use QR Code
            </SecondaryButton>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'} 
              logo={<FaUserAlt  className="w-4 h-4" />}            
              >
                Use phone / email / username
            </SecondaryButton>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'}
              logo={<FaTiktok className="w-4 h-4" />} 
            >
              Continue with TikTok
            </SecondaryButton>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'}
              logo={<FcGoogle className="w-4 h-4" />} 
            >
              Continue with Google
            </SecondaryButton>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'}
              logo={<AiFillInstagram className="w-4 h-4" />} 
            >
              Continue with Instagram
            </SecondaryButton>
            <SecondaryButton
              handler={() => router.push("/dashboard")}
              loading={false}
              disabled={false}
              width={'full'}
              logo={<AiFillApple className="w-4 h-4" />} 
            >
              Continue with Apple
            </SecondaryButton>
        </Modal>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-5">
            <div className="pt-2 pb-3 space-y-1">
              <Clickable href="#features">
                <span className="block px-3 py-2 text-gray-800">Features</span>
              </Clickable>
              <Clickable href="#faq">
                <span className="block px-3 py-2 text-gray-800">FAQ</span>
              </Clickable>
              <Clickable href="#footer">
                <span className="block px-3 py-2 text-gray-800">Contact</span>
              </Clickable>
            </div>
            <div className="w-full">
              <PrimaryButton
                handler={toggleModal}
                loading={false}
                disabled={false}
                width={'full'}
                height={'auto'}
              >
                Log in
              </PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
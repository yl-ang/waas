'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
          <div className="hidden md:block w-[30%]">
          <SecondaryButton
              handler={() => router.push("/auth")}
              loading={false}
              disabled={false}
              width={'20'}
            >
              Log in
            </SecondaryButton>
            <PrimaryButton
              handler={() => router.push("/auth")}
              loading={false}
              disabled={false}
              width={'20'}
            >
              Log in
            </PrimaryButton>
          </div>
        </div>
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
                handler={() => router.push("/auth")}
                loading={false}
                disabled={false}
                width={'full'}
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

export default Navbar;
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./Container";

export const Footer: React.FC = () => {
  const navigation = ["About", "Contact", "Careers", "Help", "Safety", "Privacy", "Community"];
  const hrefs = [
    "https://www.tiktok.com/about?lang=en",
    "https://www.tiktok.com/about/contact?lang=en",
    "https://careers.tiktok.com/",
    "https://support.tiktok.com/en",
    "https://www.tiktok.com/safety?lang=en",
    "https://www.tiktok.com/legal/privacy-policy-row?lang=en",
    "https://www.tiktok.com/community-guidelines?lang=en",
  ];

  return (
    <div className="relative" id={'footer'}>
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-row w-full h-full -mt-2 lg:ml-0">
            {navigation.map((item, index) => (
              <Link key={index} href={hrefs[index]} passHref className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-gray-800 focus:text-gray-80 focus:bg-gray-100 focus:outline-none dark:focus:bg-trueGray-700">
                  {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Tiktok. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

import React from "react";
import Navbar from "./Navbar";
import { Footer } from "../landing/Footer";

type Props = {
  title: string;
  children?: JSX.Element;
};

const Page: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="flex bg-gray-100 flex-col lg:px-72 md:px-20 px-4">
        <div className="flex flex-col w-[100%] md:h-[100%] bg-gray-100 py-4">
          <h1 className="text-center md:text-left font-bold text-3xl ">
            {title}
          </h1>
          {children}
        </div>
      </div>
      <div className="pb-48 sm:pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default Page;

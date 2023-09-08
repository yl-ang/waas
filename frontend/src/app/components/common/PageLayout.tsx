import React from "react";
import Navbar from "./Navbar";
import { Footer } from "../landing/Footer";

type Props = {
  title: string;
  children?: JSX.Element;
};

const Page: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <main>
          <div className="flex bg-gray-100 flex-col lg:px-64 px-0">
              <div className="flex flex-col w-[100%] md:h-[100%] bg-gray-100 py-4 pr-4 md:pl-5">
                  <h1 className="text-center md:text-left font-bold text-3xl ">
                      {title}
                  </h1>
                  {children}
              </div>
          </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
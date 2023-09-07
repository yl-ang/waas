import React from "react";
import Navbar from "./Navbar";

type Props = {
  title: string;
  children?: JSX.Element;
};

const Page: React.FC<Props> = ({ title, children }) => {
  return (
    <><Navbar></Navbar><main>
          <div className="flex bg-gray-100 flex-col">
              <div className="flex flex-col w-[100%] md:h-[100%] bg-gray-100 py-4 pr-4 pl-20 md:pl-5">
                  <h1 className="text-center md:text-left font-bold text-3xl ">
                      {title}
                  </h1>
                  {children}
              </div>
          </div>
      </main></>
  );
};

export default Page;
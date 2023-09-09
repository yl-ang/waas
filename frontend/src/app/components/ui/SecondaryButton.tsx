import React from "react";

type Props = {
  handler: () => void;
  children?: string;
  loading: boolean;
  disabled: boolean; // true for disabled
  width: string;
  logo: React.ReactNode;
};

const SecondaryButton: React.FC<Props> = ({ handler, loading, children, disabled, width, logo }) => {
  const widthClass = `w-${width}`;

  return (
    <button
      className={`relative inline-block md:px-8 md:py-2 px-5 py-1 md:font-medium md:text-base text-xs group border-gray-200 border
        ${widthClass} 
        ${disabled 
          ? 'opacity-80 cursor-not-allowed' 
          : 'hover:bg-[#bebebe]'} 
        bg-white`}
      onClick={handler}
      disabled={disabled || loading}
    >
      <span
        className={`absolute inset-0 w-full h-full bg-white group-hover:bg-[#bebebe] ${disabled ? 'opacity-80' : ''}`}
      ></span>
      <div className="relative text-black flex items-center justify-start">
        <div className="mr-2">{logo}</div>
        <div className="flex-1 text-center">{children}</div>
      </div>
    </button>
  );
};

export default SecondaryButton;

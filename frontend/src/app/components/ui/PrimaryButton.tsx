import React from "react";

type Props = {
  handler: () => void;
  children?: string;
  loading: boolean;
  disabled: boolean; // true for disabled
  width: string;
};

const PrimaryButton: React.FC<Props> = ({ handler, loading, children, disabled, width }) => {
  const widthClass = `w-${width}`;

  return (
    <button
      className={`relative inline-block md:px-8 md:py-2 px-5 py-1 md:font-medium md:text-base text-xs group rounded-md
        ${widthClass} 
        ${disabled 
          ? 'opacity-80 cursor-not-allowed' 
          : 'hover:bg-[#d10243]'} 
        bg-[#ff0050]`}
      onClick={handler}
      disabled={disabled || loading}
    >
      <span
        className={`absolute rounded-md inset-0 w-full h-full bg-[#ff0050] group-hover:bg-[#d10243] ${disabled ? 'opacity-80' : ''}`}
      ></span>
      <span className="relative text-white">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;

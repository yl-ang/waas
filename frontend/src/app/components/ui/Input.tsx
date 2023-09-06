import React from "react";

type Props = {
  id: string;
  type: string;
  value: string | number;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  width: string;
};

const Input: React.FC<Props> = ({
  id,
  type,
  value,
  handler,
  disabled,
  width,
}) => {
  const widthClass = `w-${width}`;

  return (
    <div className={`flex flex-row relative w-full px-1 font-medium group `}>
      <span
        className={`absolute inset-0 w-full h-full rounded-md ${
          disabled ? "bg-gray-900" : "bg-gray-200"
        } border-2 border-gray-300`}
      ></span>
      <span className="relative text-black w-full">
        {disabled ? (
          <input
            id={id}
            type={type}
            value={value || ""}
            onChange={handler}
            className="bg-transparent w-full outline-none" // Added outline-none class
            disabled
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value || ""}
            onChange={handler}
            className="bg-transparent w-full outline-none" // Added outline-none class
          />
        )}
      </span>
    </div>
  );
};

export default Input;

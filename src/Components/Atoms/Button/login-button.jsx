import React from "react";

export default function LoginButton(props) {
  const { className, disabled, ...restProps } = props;
  return (
    <>
      {!disabled ? (
        <button
          className={` text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-56 sm:w-auto px-5 py-2.5 text-center ${className}`}
          {...restProps}
        >
          Login
        </button>
      ) : (
        <button className=" text-gray-800 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-lg text-sm w-56 sm:w-auto px-5 py-2.5 text-center">
          Login
        </button>
      )}
    </>
  );
}

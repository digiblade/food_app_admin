import React from "react";

function ASolidButton(props) {
  let { className, prefix, suffix, children, ...resProps } = props;
  return (
    <button
      type="submit"
      className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      {...resProps}
    >
      {prefix}
      {children}
      {suffix}
    </button>
  );
}

export default ASolidButton;

import React from "react";

export const IconButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className="p-4 rounded-xl  text-black bg-white
        text-xl
        hover:shadow-sm  active:opacity-50 hover:rounded-2xl
        transition-all
        "
    />
  );
};

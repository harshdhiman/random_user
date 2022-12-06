import React from "react";

export const LoadingWidget = () => {
  return (
    <div className="flex flex-col items-center gap-5 select-none">
      <img
        src="https://media.tenor.com/8tHjIChdneoAAAAd/waiting-hmm.gif"
        alt="Loading..."
        className="object-cover w-[100px] h-[100px] rounded-[20px] "
      />
      <p className="text-xs italic">Loading...</p>
    </div>
  );
};

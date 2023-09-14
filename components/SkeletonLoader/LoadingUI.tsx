import React from "react";
import CardSkeleton from "./CardSkeleton";

const LoadingUI = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default LoadingUI;

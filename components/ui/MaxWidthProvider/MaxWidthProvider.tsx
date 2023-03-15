import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthProvider: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[70rem] px-4 ${className}`}>{children}</div>
  );
};

export default MaxWidthProvider;

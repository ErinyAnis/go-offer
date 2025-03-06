import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-16 xl:px-36 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

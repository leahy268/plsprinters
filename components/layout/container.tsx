import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({
  children,
  size = "medium",
  width = "large",
  className = "",
  ...props
}) => {
  const verticalPadding = {
    custom: "",
    small: "py-2",
    medium: "py-4",
    large: "py-6",
    default: "py-6",
  };
  const widthClass = {
    small: "max-w-4xl",
    medium: "max-w-5xl",
    large: "max-w-7xl",
    custom: "",
  };

  return (
    <div
      className={cn(
        widthClass[width],
        `mx-auto px-6 sm:px-8`,
        verticalPadding[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

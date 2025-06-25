import { ReactNode } from "react";
import { Button } from "./ui/button";

const LinkButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
      className={`bg-transparent rounded-4xl border-2 border-neutral-200 h-10 cursor-pointer transition-all duration-300 p-0 hover:bg-neutral-100 hover:border-neutral-100 hover:text-gray-900 ${className}`}
    >
      {children}
    </Button>
  );
};

export default LinkButton;

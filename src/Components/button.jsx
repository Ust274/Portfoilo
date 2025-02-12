import React, { useEffect, useRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import gsap from "gsap";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90",
        outline: "border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  const buttonRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={(node) => {
        buttonRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { buttonVariants };

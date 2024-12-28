import React, { useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import gsap from "gsap";

export const Card = React.forwardRef(({ className, ...props }, ref) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={(node) => {
        cardRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn(
        "rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
  const headerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power1.out" }
    );
  }, []);

  return (
    <div
      ref={(node) => {
        headerRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <h3
      ref={(node) => {
        titleRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
  const descriptionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power1.out" }
    );
  }, []);

  return (
    <p
      ref={(node) => {
        descriptionRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn("text-sm text-zinc-500", className)}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef(({ className, ...props }, ref) => {
  const contentRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={(node) => {
        contentRef.current = node;
        if (ref) ref.current = node;
      }}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  );
});
CardContent.displayName = "CardContent";

import React, { useEffect, useRef, useState, ReactNode } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "0px" }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  return { ref, isVisible };
};

interface ScrollWrapperProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
}

export const ScrollWrapper = ({ children, className = "", animationClass = "animate-fade-up", delay }: ScrollWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const childrenWithAnimation = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const existingClass = (child.props as React.ComponentProps<"div">).className || "";
      const existingStyle = (child.props as React.ComponentProps<"div">).style || {};
      return React.cloneElement(child as React.ReactElement<React.ComponentProps<"div">>, {
        className: `${existingClass} ${isVisible ? animationClass : ""}`.trim(),
        style: {
          ...existingStyle,
          animationDelay: isVisible && delay ? `${delay}s` : undefined,
        },
      });
    }
    return child;
  });

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "" : "opacity-0"}`}
    >
      {childrenWithAnimation}
    </div>
  );
};
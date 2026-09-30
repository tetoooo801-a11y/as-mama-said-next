"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollVelocityProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[] | string | React.ReactNode;
  velocity: number;
  movable?: boolean;
  clamp?: boolean;
  pauseOnHover?: boolean;
}

const ScrollVelocity = React.forwardRef<HTMLDivElement, ScrollVelocityProps>(
  (
    {
      children,
      velocity = 5,
      movable = true,
      clamp = false,
      pauseOnHover = true,
      className,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 100,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
      clamp,
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = React.useRef<number>(1);
    const scrollThreshold = React.useRef<number>(5);

    useAnimationFrame((t, delta) => {
      if (pauseOnHover && isHovered) return;

      if (movable) {
        move(delta);
      } else {
        if (Math.abs(scrollVelocity.get()) >= scrollThreshold.current) {
          move(delta);
        }
      }
    });

    function move(delta: number) {
      let moveBy = directionFactor.current * velocity * (delta / 1000);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }

    return (
      <div
        ref={ref}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          onMouseLeave?.(e);
        }}
        className={cn(
          "relative m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] tracking-[-2px]",
          className
        )}
        {...props}
      >
        <motion.div
          className="flex flex-row flex-nowrap whitespace-nowrap text-xl font-semibold uppercase *:mr-4 *:block md:*:mr-6"
          style={{ x }}
        >
          {typeof children === "string" ? (
            <>
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>{children}</span>
              ))}
            </>
          ) : (
            children
          )}
        </motion.div>
      </div>
    );
  }
);
ScrollVelocity.displayName = "ScrollVelocity";

export { ScrollVelocity, type ScrollVelocityProps };

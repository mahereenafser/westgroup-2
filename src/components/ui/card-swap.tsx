'use client';

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  ReactNode,
  HTMLAttributes,
} from 'react';
import gsap from 'gsap';

// --- Type Definitions ---

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardSwapProps {
  children: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: 'elastic' | 'power';
  visibleCards?: number;
  syncGroup?: string;
}

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

// --- Helper Functions ---

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number,
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLDivElement, slot: Slot, skew: number): void => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });
};

// --- Child Component: Card ---

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-2xl border p-4 sm:p-6 lg:p-8
      bg-black/40 backdrop-blur-sm text-white border-primary-500/30
      [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]
      shadow-lg hover:shadow-xl transition-all duration-300 ${className ?? ''}`.trim()}
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    />
  ),
);
Card.displayName = 'Card';

// --- Main Component: CardSwap ---

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  visibleCards = 4,
  syncGroup,
  children,
}: CardSwapProps) => {
  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing],
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length],
  );
  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i),
  );
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount,
        );
        // Hide cards beyond visible count
        if (i >= visibleCards) {
          gsap.set(r.current, { opacity: 0, visibility: 'hidden' });
        } else {
          gsap.set(r.current, { opacity: 1, visibility: 'visible' });
        }
      }
    });

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');

        // Show the next card when it comes into view
        if (i === visibleCards - 1) {
          tl.set(el, { opacity: 1, visibility: 'visible' }, 'promote');
        }

        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => gsap.set(elFront, { zIndex: backSlot.zIndex }), [], 'return');
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, 'return');
      tl.to(
        elFront,
        { y: backSlot.y, duration: config.durReturn, ease: config.ease },
        'return',
      );
      tl.call(() => {
        order.current = [...rest, front];
        // Hide the card that went to the back if it's beyond visible count
        const newBackPosition = order.current.indexOf(front);
        if (newBackPosition >= visibleCards) {
          gsap.set(elFront, { opacity: 0, visibility: 'hidden' });
        }
      });
    };

    // Sync mechanism using custom events
    const handleSyncSwap = () => {
      swap();
    };

    if (syncGroup) {
      window.addEventListener(`cardswap-${syncGroup}`, handleSyncSwap);
    }

    // Initial animation call
    const timeoutId = setTimeout(() => {
      swap();
      if (syncGroup) {
        window.dispatchEvent(new CustomEvent(`cardswap-${syncGroup}`));
      }
    }, 100);

    intervalRef.current = window.setInterval(() => {
      swap();
      if (syncGroup) {
        window.dispatchEvent(new CustomEvent(`cardswap-${syncGroup}`));
      }
    }, delay);

    const node = containerRef.current;
    if (pauseOnHover && node) {
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(() => {
          swap();
          if (syncGroup) {
            window.dispatchEvent(new CustomEvent(`cardswap-${syncGroup}`));
          }
        }, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        if (syncGroup) {
          window.removeEventListener(`cardswap-${syncGroup}`, handleSyncSwap);
        }
        clearTimeout(timeoutId);
        clearInterval(intervalRef.current);
      };
    }

    return () => {
      if (syncGroup) {
        window.removeEventListener(`cardswap-${syncGroup}`, handleSyncSwap);
      }
      clearTimeout(timeoutId);
      clearInterval(intervalRef.current);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, config, refs, visibleCards, syncGroup]);

  const renderedChildren = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          },
        })
      : child,
  );

  return (
    <div
      ref={containerRef}
      className="relative mx-auto perspective-[900px] overflow-visible
      transform
      lg:scale-100
      md:scale-[0.85]
      sm:scale-[0.7]
      max-sm:scale-[0.55]
      origin-center"
      style={{ width, height }}
    >
      {renderedChildren}
    </div>
  );
};

export default CardSwap;

"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full sm:w-[400px] cursor-pointer h-auto sm:h-[450px] overflow-hidden backdrop-blur-md bg-black/40 rounded-2xl shadow-[0_8px_32px_0_rgba(134,239,172,0.15)] border border-white/10 hover:shadow-[0_8px_48px_0_rgba(134,239,172,0.25)] transition-shadow duration-300",
        className
      )}
    >
      {children && (
        <div className="px-4 py-4 sm:px-6 sm:py-6 flex flex-col gap-y-2 sm:gap-y-4 h-full">{children}</div>
      )}
    </div>
  );
};

interface CardData {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: React.ReactNode;
}

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 450,
  rotationAngle = 0,
  animationDelay = 0.05,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Limit to maximum of 3 cards
  const limitedCards = cards.slice(0, 3);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play carousel on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % limitedCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, limitedCards.length]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return limitedCards.length - 1;
      if (nextIndex >= limitedCards.length) return 0;
      return nextIndex;
    });
  };

  // Mobile carousel view
  if (isMobile) {
    return (
      <div className="relative w-full h-auto overflow-hidden px-4">
        <div className="relative h-auto min-h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 300 : -300,
                  opacity: 0
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1
                },
                exit: (direction: number) => ({
                  zIndex: 0,
                  x: direction < 0 ? 300 : -300,
                  opacity: 0
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <Card>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="mr-2 scale-75">{limitedCards[currentIndex].icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {limitedCards[currentIndex].title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {limitedCards[currentIndex].description}
                  </p>
                  <ul className="space-y-1.5 mb-3">
                    {limitedCards[currentIndex].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={limitedCards[currentIndex].link}
                  className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium inline-flex items-center group"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-1 mt-3">
          {limitedCards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "w-1 h-1 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-green-400 scale-125" : "bg-gray-600 opacity-60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop stacked view
  return (
    <div className="relative w-full h-full flex items-start justify-start">
      <div className="relative w-full h-[450px]" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        {limitedCards.map((card, index) => {
          let xOffset = 0;

          if (isHovering) {
            // When hovering, spread all cards horizontally from left
            xOffset = index * spreadDistance;
          }

          return (
            <motion.div
              key={index}
              className={cn("absolute left-0 top-0")}
              style={{ zIndex: isHovering ? 10 + index : 10 - index }}
              initial={{ x: 0, rotate: 0 }}
              animate={{
                x: xOffset,
                rotate: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: isHovering ? index * animationDelay : (limitedCards.length - 1 - index) * animationDelay,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >
              <Card>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={card.link}
                  className="text-green-400 hover:text-green-300 text-sm font-medium inline-flex items-center group"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export { StackedCardsInteraction, Card };

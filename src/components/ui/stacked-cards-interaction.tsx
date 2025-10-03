"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

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
        "w-[400px] cursor-pointer h-[450px] overflow-hidden backdrop-blur-md bg-black/40 rounded-2xl shadow-[0_8px_32px_0_rgba(134,239,172,0.15)] border border-white/10 hover:shadow-[0_8px_48px_0_rgba(134,239,172,0.25)] transition-shadow duration-300",
        className
      )}
    >
      {children && (
        <div className="px-6 py-6 flex flex-col gap-y-4 h-full">{children}</div>
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

  // Limit to maximum of 3 cards
  const limitedCards = cards.slice(0, 3);

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

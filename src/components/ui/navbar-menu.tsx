"use client";
import React from "react";
import { motion, Transition } from "framer-motion";

// Transition config
const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// ✅ Exported Menu wrapper
export const Menu = ({
  children,
  setActive,
}: {
  children: React.ReactNode;
  setActive: (item: string) => void;
}) => {
  return (
    <div
      onMouseLeave={() => setActive("")}
      className="relative rounded-full flex justify-center space-x-10 border border-black/[0.2] dark:border-white/[0.2] bg-white/75 dark:bg-black/75 px-10 py-4 shadow-lg backdrop-blur"
    >
      {children}
    </div>
  );
};

// ✅ Exported MenuItem (already provided)
export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

// ✅ Exported HoveredLink
export const HoveredLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-sm text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
    >
      {children}
    </a>
  );
};

// ✅ Optional ProductItem (basic placeholder)
export const ProductItem = ({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) => {
  return (
    <a href={href} className="block p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
      <p className="font-semibold">{title}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">{description}</p>
    </a>
  );
};

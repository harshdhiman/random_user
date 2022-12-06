import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 *
 * @param props `id` - unique id for the hover card (required), has to be unique for the page
 * @returns
 */
export const HoverCard = (props: {
  id: string;
  children: React.ReactNode;
  hoverContent: React.ReactNode;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div layoutId={props.id}>{props.children}</motion.div>
      <AnimatePresence>
        {isHovering && (
          <motion.div
            layoutId={props.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 w-max select-none"
            style={{
              zIndex: 1000,
            }}
            transition={{ duration: 0.2 }}
          >
            {props.hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

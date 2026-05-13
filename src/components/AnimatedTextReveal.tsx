import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  containerClassName?: string;
  initialBlur?: number;
  initialOpacity?: number;
}

export default function AnimatedTextReveal({ 
  text, 
  className = "", 
  containerClassName = "py-8",
  initialBlur = 10,
  initialOpacity = 0.1
}: AnimatedTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"] 
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <div className="flex flex-wrap top-[30vh] left-0 w-full">
        <div className={className}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word 
                key={i} 
                word={word} 
                progress={scrollYProgress} 
                range={[start, end]} 
                initialBlur={initialBlur}
                initialOpacity={initialOpacity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Word: FC<{ 
  word: string; 
  progress: MotionValue<number>; 
  range: [number, number];
  initialBlur: number;
  initialOpacity: number;
}> = ({ 
  word, 
  progress, 
  range,
  initialBlur,
  initialOpacity
}) => {
  const opacity = useTransform(progress, range, [initialOpacity, 1]);
  const blur = useTransform(progress, range, [initialBlur, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  
  return (
    <motion.span className="inline-block mr-[0.25em] mb-[0.1em]" style={{ opacity, filter }}>
      {word}
    </motion.span>
  );
}

import { motion, MotionValue, useTransform, useReducedMotion } from 'motion/react';

const PERIOD = 132;
const WAVE_PERIODS = 16;
const SVG_W = PERIOD * WAVE_PERIODS; 
const SVG_H = 270;
const PEAK_Y = 5;
const TROUGH_Y = 15;

function buildWavePath() {
  const h = PERIOD / 4;
  let d = `M 0 ${PEAK_Y}`;
  for (let i = 0; i < WAVE_PERIODS; i++) {
    const x0 = i * PERIOD;
    const xm = x0 + PERIOD / 2;
    const x1 = x0 + PERIOD;
    d += ` C ${x0 + h} ${PEAK_Y} ${xm - h} ${TROUGH_Y} ${xm} ${TROUGH_Y}`;
    d += ` C ${xm + h} ${TROUGH_Y} ${x1 - h} ${PEAK_Y} ${x1} ${PEAK_Y}`;
  }
  d += ` L ${SVG_W} ${SVG_H} L 0 ${SVG_H} Z`;
  return d;
}

const WAVE_PATH = buildWavePath();

interface LiquidBackgroundProps {
  fillProgress: MotionValue<number>; // 0 to 100
}

export default function LiquidBackground({ fillProgress }: LiquidBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const yPercent = useTransform(fillProgress, [0, 100], ['100%', '0%']);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#e4f5fd] dark:bg-[#06152a] pointer-events-none transition-colors duration-500">
      
      {/* 
        This wrapper translates from exactly the bottom (100%) to exactly the top (0%).
        Its top edge represents the water level.
      */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yPercent }}
      >
        {/* The wave SVG positioned with its peak effectively at 0 (top of wrapper) */}
        <div 
          className="absolute left-0 right-0 w-full" 
          style={{ height: `${SVG_H}px`, top: 0 }}
        >
          {/* Lighter wave behind */}
          <motion.svg
            className="absolute top-0 left-0"
            width={SVG_W}
            height={SVG_H}
            style={{ x: 0 }}
            animate={shouldReduceMotion ? {} : { x: [-66, -462] }}
            transition={{ ease: "linear", duration: 4.23, repeat: Infinity }}
          >
            <path d={WAVE_PATH} className="fill-[#b0e8fd] dark:fill-[#0c4a6e]" />
          </motion.svg>

          {/* Darker wave on top */}
          <motion.svg
            className="absolute top-0 left-0"
            width={SVG_W}
            height={SVG_H}
            style={{ x: 0 }}
            animate={shouldReduceMotion ? {} : { x: [-396, 0] }}
            transition={{ ease: "linear", duration: 4.23, repeat: Infinity }}
          >
            <path d={WAVE_PATH} className="fill-[#00b6fe] dark:fill-[#0284c7]" />
          </motion.svg>
        </div>

        {/* The solid fill starts from just below the wave's path height -> SVG_H - 1 */}
        <div 
          className="absolute left-0 right-0 bottom-0 bg-[#00b6fe] dark:bg-[#0284c7]" 
          style={{ top: `${SVG_H - 1}px` }} 
        />
      </motion.div>
    </div>
  );
}




import { useState, useEffect, useRef, useCallback } from 'react'
import './BubbleBackground.css'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Background bubbles — deterministic, always floating
const BG_BUBBLES = Array.from({ length: 25 }, (_, i) => ({
  id:       i,
  size:     20 + (i * 37 % 51),
  left:     ((i * 41 + 3) % 95) + '%',
  duration: 10 + (i * 7  % 16),
  delay:    -(i * 1.7 % 11),
}))

function BubbleBackgroundInner() {
  const [mouseBubbles, setMouseBubbles] = useState<any[]>([])
  const lastTime = useRef(0)
  const uid      = useRef(0)

  const handleMove = useCallback((e: MouseEvent) => {
    const now = Date.now()
    if (now - lastTime.current < 75) return   // ~13 bubbles/s max
    lastTime.current = now

    uid.current += 1
    const id   = uid.current
    const size = 16 + (id * 29 % 38)          // 16 – 53 px, deterministic

    setMouseBubbles(prev => [...prev.slice(-30), { id, x: e.clientX, y: e.clientY, size }])
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [handleMove])

  const removeBubble = useCallback((id: number) => {
    setMouseBubbles(prev => prev.filter(b => b.id !== id))
  }, [])

  return (
    <div className="bb-root">
      {/* ── always-on background bubbles ── */}
      {BG_BUBBLES.map(b => (
        <div
          key={b.id}
          className="bb-bubble bb-bg"
          style={{
            width:            b.size,
            height:           b.size,
            left:             b.left,
            animationDuration:`${b.duration}s`,
            animationDelay:   `${b.delay}s`,
          }}
        />
      ))}

      {/* ── mouse-spawned bubbles ── */}
      {mouseBubbles.map(b => (
        <div
          key={b.id}
          className="bb-bubble bb-mouse"
          style={{
            width:  b.size,
            height: b.size,
            left:   b.x - b.size / 2,
            top:    b.y - b.size / 2,
          }}
          onAnimationEnd={() => removeBubble(b.id)}
        />
      ))}
    </div>
  )
}

export default function BubbleBackground() {
  if (prefersReducedMotion) return null;
  return <BubbleBackgroundInner />;
}

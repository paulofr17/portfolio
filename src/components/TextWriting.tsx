import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { CursorBlinker } from './CursorBlinker'

export function TextWriting({ text }: { text: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest))

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 10,
      ease: 'easeInOut',
    })
    return () => {
      controls.stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  )
}

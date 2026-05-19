import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const variants: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0 },
}

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: 'up' | 'fade' | 'scale'
  once?: boolean
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  variant = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-10% 0px -8% 0px', amount: 0.2 })

  const v = variant === 'fade' ? fadeVariants : variant === 'scale' ? scaleVariants : variants

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={v}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className = '',
  stagger = 0.05,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px 180px 0px', amount: 0.05 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
    >
      {children}
    </motion.div>
  )
}

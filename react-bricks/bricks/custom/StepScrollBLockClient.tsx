'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

interface StepScrollBlockClientProps {
    children?: React.ReactNode
    heightPerStep?: number
    mobileHeightPerStep?: number
    desktopBlockHeight?: string
    mobileBlockHeight?: string
    lockMs?: number
}

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max)

const StepScrollBlockClient: React.FC<StepScrollBlockClientProps> = ({
                                                                         children,
                                                                         heightPerStep = 100,
                                                                         mobileHeightPerStep = 70,
                                                                         desktopBlockHeight = '100svh',
                                                                         mobileBlockHeight = '75svh',
                                                                         lockMs = 450,
                                                                     }) => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const lockedRef = useRef(false)

    const childArray = useMemo(() => React.Children.toArray(children), [children])
    const steps = childArray.length

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const effectiveHeightPerStep = isMobile ? mobileHeightPerStep : heightPerStep
    const blockHeight = isMobile ? mobileBlockHeight : desktopBlockHeight
    const sectionHeight = `${Math.max(steps, 1) * effectiveHeightPerStep}svh`

    useEffect(() => {
        const updateStep = () => {
            const el = sectionRef.current
            if (!el || steps === 0) return

            const rect = el.getBoundingClientRect()
            const maxScrollable = el.offsetHeight - window.innerHeight

            if (maxScrollable <= 0) {
                setActiveIndex(0)
                return
            }

            const pixelsScrolled = clamp(-rect.top, 0, maxScrollable)
            const progress = pixelsScrolled / maxScrollable
            const targetIndex = Math.min(Math.floor(progress * steps), steps - 1)

            if (lockedRef.current) return
            if (targetIndex === activeIndex) return

            const direction = targetIndex > activeIndex ? 1 : -1

            lockedRef.current = true
            setActiveIndex((prev) => clamp(prev + direction, 0, steps - 1))

            window.setTimeout(() => {
                lockedRef.current = false
            }, lockMs)
        }

        updateStep()
        window.addEventListener('scroll', updateStep, { passive: true })
        window.addEventListener('resize', updateStep)

        return () => {
            window.removeEventListener('scroll', updateStep)
            window.removeEventListener('resize', updateStep)
        }
    }, [steps, activeIndex, effectiveHeightPerStep, lockMs])

    return (
        <section
            ref={sectionRef}
            style={{ height: sectionHeight }}
            className="relative"
        >
            <div
                className="sticky top-0 overflow-hidden"
                style={{ height: blockHeight }}
            >
                <div
                    className="h-full transition-transform duration-500 ease-out md:mb-0"
                    style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                    {childArray.map((child, index) => (
                        <div
                            key={index}
                            className="flex items-end md:items-center md:mb-0"
                            style={{ height: blockHeight }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StepScrollBlockClient
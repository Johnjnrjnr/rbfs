'use client'

import React, { useEffect, useRef, useState } from 'react'

interface HorizontalCardsScrollerProps {
    children: React.ReactNode
    backgroundColor: {color: string, className: string}
}

const HorizontalCardsScroller: React.FC<HorizontalCardsScrollerProps> = ({
                                                                             children,
    backgroundColor
                                                                         }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateButtons = () => {
        const el = scrollRef.current
        if (!el) return

        setCanScrollLeft(el.scrollLeft > 4)
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }

    const getScrollAmount = () => {
        const el = scrollRef.current
        if (!el) return 344

        const firstCard = el.querySelector<HTMLElement>('[data-scroll-card]')
        if (!firstCard) return 344

        const styles = window.getComputedStyle(el)
        const gapValue = styles.columnGap || styles.gap || '24px'
        const gap = parseFloat(gapValue)

        return firstCard.offsetWidth + gap
    }

    const scrollNext = () => {
        scrollRef.current?.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth',
        })
    }

    const scrollPrev = () => {
        scrollRef.current?.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        updateButtons()

        const el = scrollRef.current
        if (!el) return

        el.addEventListener('scroll', updateButtons, { passive: true })
        window.addEventListener('resize', updateButtons)

        return () => {
            el.removeEventListener('scroll', updateButtons)
            window.removeEventListener('resize', updateButtons)
        }
    }, [])

    return (
        <>
            <div
                ref={scrollRef}
                className="flex gap-[18px] w-full scroll-smooth overflow-visible overflow-x-scroll pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden start-padding end-padding"
            >
                {children}
            </div>

            <div className="mt-4 flex justify-end gap-2 pr-[300px]">
                <button
                    type="button"
                    onClick={scrollPrev}
                    disabled={!canScrollLeft}
                    aria-label="Previous card"
                    className={"flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition disabled:cursor-not-allowed disabled:opacity-40 " + backgroundColor?.className + " " + backgroundColor?.className === "bg-black" ? " text-white" : ""}
                >
                    ←
                </button>
                <button
                    type="button"
                    onClick={scrollNext}
                    disabled={!canScrollRight}
                    aria-label="Next card"
                    className={"flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 transition disabled:cursor-not-allowed disabled:opacity-40 " + backgroundColor?.className + " " + backgroundColor?.className === "bg-black" ? " text-white" : ""}
                >
                    →
                </button>
            </div>
        </>
    )
}

export default HorizontalCardsScroller
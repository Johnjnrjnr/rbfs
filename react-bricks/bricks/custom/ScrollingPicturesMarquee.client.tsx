'use client'

import React from 'react'

export interface ScrollingPicturesMarqueeClientProps {
    images: string[]
    rowHeight?: number
    gap?: number
    speed?: number
    rounded?: boolean
}

const splitIntoRows = (images: string[]) => {
    const rows: string[][] = [[], [], []]

    images.forEach((image, index) => {
        rows[index % 3].push(image)
    })

    return rows
}

const repeatRow = (row: string[]) => {
    if (row.length === 0) return []

    let expanded = [...row]
    while (expanded.length < 8) {
        expanded = [...expanded, ...row]
    }

    return [...expanded, ...expanded]
}

const ScrollingPicturesMarqueeClient: React.FC<
    ScrollingPicturesMarqueeClientProps
> = ({
         images,
         rowHeight = 220,
         gap = 24,
         speed = 28,
         rounded = true,
     }) => {
    const rows = splitIntoRows(images).map(repeatRow)
    const imageWidth = Math.round(rowHeight * 1.35)

    return (
        <section className="w-full overflow-hidden bg-white py-8 ">
            <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

            <div className="flex flex-col gap-6">
                {rows.map((row, rowIndex) => {
                    if (row.length === 0) return null

                    const animationName =
                        rowIndex % 2 === 0 ? 'marqueeLeft' : 'marqueeRight'

                    return (
                        <div key={rowIndex} className="w-full overflow-hidden">
                            <div
                                className="flex w-max flex-nowrap"
                                style={{
                                    gap: `${gap}px`,
                                    animationName,
                                    animationDuration: `${speed}s`,
                                    animationTimingFunction: 'linear',
                                    animationIterationCount: 'infinite',
                                    willChange: 'transform',
                                }}
                            >
                                {row.map((src, index) => (
                                    <div
                                        key={`${rowIndex}-${index}`}
                                        className="shrink-0 overflow-hidden bg-gray-100"
                                        style={{
                                            width: `${imageWidth}px`,
                                            height: `${rowHeight}px`,
                                            borderRadius: rounded ? '24px' : '0px',
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            className="h-full w-full object-cover"
                                            draggable={false}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ScrollingPicturesMarqueeClient
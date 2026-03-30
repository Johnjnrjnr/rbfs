'use client'

import React, { useEffect, useRef, useState } from 'react'

export interface FullPageVideoScrollProps {
    videoUrl?: string
    overlayOpacity?: number
    scrollSpeed?: number
}

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max)

const FullPageVideoScrollClient: React.FC<FullPageVideoScrollProps> = ({
                                                                           videoUrl,
                                                                           overlayOpacity = 0.2,
                                                                           scrollSpeed = 100,
                                                                       }) => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const [duration, setDuration] = useState(0)
    const [sectionHeight, setSectionHeight] = useState('300vh')

    const targetTimeRef = useRef(0)
    const rafRef = useRef<number | null>(null)
    const isSeekingRef = useRef(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const onLoadedMetadata = () => {
            const d = Number.isFinite(video.duration) ? video.duration : 0
            setDuration(d)

            const computedHeight = Math.max(200, Math.min(d * scrollSpeed, 2500))
            setSectionHeight(`${computedHeight}vh`)

            video.pause()
            video.currentTime = 0
            targetTimeRef.current = 0
        }

        const onSeeking = () => {
            isSeekingRef.current = true
        }

        const onSeeked = () => {
            isSeekingRef.current = false
        }

        video.addEventListener('loadedmetadata', onLoadedMetadata)
        video.addEventListener('seeking', onSeeking)
        video.addEventListener('seeked', onSeeked)
        video.load()

        return () => {
            video.removeEventListener('loadedmetadata', onLoadedMetadata)
            video.removeEventListener('seeking', onSeeking)
            video.removeEventListener('seeked', onSeeked)
        }
    }, [videoUrl, scrollSpeed])

    useEffect(() => {
        const updateTargetFromScroll = () => {
            const section = sectionRef.current
            if (!section || !duration) return

            const rect = section.getBoundingClientRect()
            const maxScrollable = section.offsetHeight - window.innerHeight
            if (maxScrollable <= 0) {
                targetTimeRef.current = 0
                return
            }

            const pixelsScrolledInSection = clamp(-rect.top, 0, maxScrollable)
            const progress = pixelsScrolledInSection / maxScrollable
            targetTimeRef.current = progress * duration
        }

        const animate = () => {
            const video = videoRef.current

            if (video && duration && !isSeekingRef.current) {
                const delta = targetTimeRef.current - video.currentTime

                if (Math.abs(delta) > 0.02) {
                    video.currentTime += delta * 0.18
                }
            }

            rafRef.current = window.requestAnimationFrame(animate)
        }

        updateTargetFromScroll()
        rafRef.current = window.requestAnimationFrame(animate)

        window.addEventListener('scroll', updateTargetFromScroll, { passive: true })
        window.addEventListener('resize', updateTargetFromScroll)

        return () => {
            window.removeEventListener('scroll', updateTargetFromScroll)
            window.removeEventListener('resize', updateTargetFromScroll)

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current)
            }
        }
    }, [duration])

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-black"
            style={{ height: sectionHeight }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {videoUrl ? (
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        muted
                        playsInline
                        preload="auto"
                        controls={false}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                        No video uploaded yet.
                    </div>
                )}

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
                />
            </div>
        </section>
    )
}

export default FullPageVideoScrollClient
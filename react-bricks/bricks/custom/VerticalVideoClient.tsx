'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";

export interface VerticalVideoProps {
    videoUrl?: string
    title: string
    text: string
}

const VerticalVideoClient: React.FC<VerticalVideoProps> = ({
                                                               videoUrl,
                                                               title,
                                                               text,
                                                           }) => {
    const [muted, setMuted] = useState(true)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const videoId = useId()

    useEffect(() => {
        const handleOtherVideoActivated = (event: Event) => {
            const customEvent = event as CustomEvent<{ videoId: string }>
            const activeVideoId = customEvent.detail?.videoId

            if (activeVideoId !== videoId) {
                setMuted(true)
            }
        }

        window.addEventListener(
            'vertical-video-activated',
            handleOtherVideoActivated as EventListener
        )

        return () => {
            window.removeEventListener(
                'vertical-video-activated',
                handleOtherVideoActivated as EventListener
            )
        }
    }, [videoId])

    const handleClick = async () => {
        const video = videoRef.current
        if (!video) return

        window.dispatchEvent(
            new CustomEvent('vertical-video-activated', {
                detail: { videoId },
            })
        )

        setMuted(!muted)
        video.currentTime = 0

        try {
            await video.play()
        } catch (err) {
            console.error('Video could not restart:', err)
        }
    }

    return (
        <div className="block">
            <div className="w-full flex justify-center">
                <div className="relative w-[409px] h-[512px] overflow-hidden rounded-2xl bg-black"
                     style={{
                         transform: 'translateZ(0)',
                         backfaceVisibility: 'hidden',
                         WebkitBackfaceVisibility: 'hidden',
                         marginBottom: "23px"
                     }}>
                    {videoUrl ? (
                        <video
                            ref={videoRef}
                            src={videoUrl}
                            autoPlay
                            loop
                            muted={muted}
                            playsInline
                            controls={false}
                            onClick={handleClick}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-200">
                            No video uploaded yet.
                        </div>
                    )}
                </div>
            </div>

            <TypographyRichTextExt propName="title" value={title}/>
            <TypographyRichTextExt propName="text" value={text} />
        </div>
    )
}

export default VerticalVideoClient
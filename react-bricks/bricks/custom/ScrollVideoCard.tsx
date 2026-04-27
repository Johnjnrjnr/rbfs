import { File, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ScrollVideoCardProps {
    eyebrow: types.TextValue
    title: types.TextValue
    text: types.TextValue

    hasVideo: boolean
    video: types.IFileSource
    videoWidth: number
    textWidth: number
    videoRounded: boolean
    videoBottomSpace: number
    videoTopSpace: number
    videoAspectRatio: number
    videoPosition: 'top' | 'bottom'
    videoResizesCard: boolean

    autoPlay: boolean
    loop: boolean
    muted: boolean
    controls: boolean
}

const ScrollVideoCard: types.Brick<ScrollVideoCardProps> = ({
                                                                eyebrow,
                                                                title,
                                                                text,
                                                                hasVideo,
                                                                video,
                                                                videoWidth,
    textWidth,
                                                                videoRounded,
                                                                videoBottomSpace,
                                                                videoTopSpace,
                                                                videoAspectRatio,
                                                                videoPosition,
                                                                videoResizesCard,
                                                                autoPlay,
                                                                loop,
                                                                muted,
                                                                controls,
                                                                ...rest
                                                            }) => {
    const mediaBlock = hasVideo ? (
        <div
            style={{
                marginTop: videoPosition === 'bottom' ? `${videoTopSpace}px` : '0px',
                marginBottom: videoPosition === 'top' ? `${videoBottomSpace}px` : '0px',
            }}
        >
            <File
                propName="video"
                source={video}
                allowedExtensions={['.mp4', '.webm', '.mov']}
                renderBlock={(file) =>
                    file ? (
                        <div
                            className="overflow-hidden bg-black"
                            style={{
                                width: '100%',
                                aspectRatio: `${videoAspectRatio}`,
                                borderRadius: videoRounded ? '20px' : '0px',
                            }}
                        >
                            <video
                                src={file.url}
                                autoPlay={autoPlay}
                                loop={loop}
                                muted={muted}
                                controls={controls}
                                playsInline
                                className="h-full w-full object-cover"
                                style={{
                                    display: 'block',
                                    borderRadius: videoRounded ? '15px' : '0px',
                                }}
                            />
                        </div>
                    ) : (
                        <div
                            className="flex items-center justify-center bg-neutral-800 text-white"
                            style={{
                                width: '100%',
                                aspectRatio: `${videoAspectRatio}`,
                            }}
                        >
                            No video uploaded
                        </div>
                    )
                }
            />
        </div>
    ) : null

    const cardWidth = videoResizesCard
        ? Math.max(280, Math.min(videoWidth, 900))
        : undefined

    return (
        <article
            {...rest}
            className="w-[380px] shrink-0 rounded-[28px] h-full bg-black text-white md:w-[var(--card-width)]"
            style={{
                "--card-width": cardWidth + "px"
             } as React.CSSProperties}
        >
            {videoPosition === 'top' && mediaBlock}
            <div className="max-w-[var(--text-width)] ml-[5px] md:ml-[20px]"
            style={{"--text-width": textWidth+"px"} as React.CSSProperties}>
            <TypographyRichTextExt
                propName="text"
                value={text}
                placeholder="Beschreibung"
            />
            </div>

            {videoPosition === 'bottom' && mediaBlock}
        </article>
    )
}

ScrollVideoCard.schema = {
    name: 'scroll-video-card',
    label: 'Scroll Video Card',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        eyebrow: [
            {
                type: 'p',
                children: [{ text: 'Video' }],
            },
        ],
        title: [
            {
                type: 'p',
                children: [{ text: 'Bewegte Inhalte mit Wirkung.' }],
            },
        ],
        text: [
            {
                type: 'p',
                children: [
                    {
                        text: 'Mit starken Videoformaten lassen sich Inhalte emotional und klar transportieren.',
                    },
                ],
            },
        ],

        hasVideo: true,
        videoWidth: 900,
        videoRounded: true,
        videoBottomSpace: 18,
        videoTopSpace: 18,
        videoAspectRatio: 1.5,
        videoPosition: 'top',
        videoResizesCard: true,

        autoPlay: true,
        loop: true,
        muted: true,
        controls: false,
    }),
    sideEditProps: [
        {
            groupName: 'Video',
            props: [
                {
                    name: 'hasVideo',
                    label: 'Has Video',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: 'videoPosition',
                    label: 'Video Position',
                    type: types.SideEditPropType.Select,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                    selectOptions: {
                        display: types.OptionsDisplay.Radio,
                        options: [
                            { label: 'Top', value: 'top' },
                            { label: 'Bottom', value: 'bottom' },
                        ],
                    },
                },
                {
                    name: 'videoResizesCard',
                    label: 'Video Resizes Card',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'videoWidth',
                    label: 'Video Width',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 120,
                        max: 900,
                        step: 10,
                    },
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'textWidth',
                    label: 'Text Width',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 120,
                        max: 900,
                        step: 10,
                    },
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'videoAspectRatio',
                    label: 'Aspect Ratio',
                    type: types.SideEditPropType.Select,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                    selectOptions: {
                        display: types.OptionsDisplay.Select,
                        options: [
                            { label: 'Square', value: 1 },
                            { label: '4:3', value: 1.33 },
                            { label: '3:4', value: 0.75 },
                            { label: '16:9', value: 1.78 },
                            { label: '3:2', value: 1.5 },
                        ],
                    },
                },
                {
                    name: 'videoRounded',
                    label: 'Rounded Corners',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'videoBottomSpace',
                    label: 'Space Below Video',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 0,
                        max: 80,
                        step: 4,
                    },
                    show: (props: ScrollVideoCardProps) =>
                        props.hasVideo && props.videoPosition === 'top',
                },
                {
                    name: 'videoTopSpace',
                    label: 'Space Above Video',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 0,
                        max: 80,
                        step: 4,
                    },
                    show: (props: ScrollVideoCardProps) =>
                        props.hasVideo && props.videoPosition === 'bottom',
                },
                {
                    name: 'autoPlay',
                    label: 'Autoplay',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'loop',
                    label: 'Loop',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'muted',
                    label: 'Muted',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
                {
                    name: 'controls',
                    label: 'Controls',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollVideoCardProps) => props.hasVideo,
                },
            ],
        },
    ],
}

export default ScrollVideoCard
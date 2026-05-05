import { Image, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ScrollCardProps {
    eyebrow: types.TextValue
    title: types.TextValue
    text: types.TextValue
    width: number
    fullWidth: boolean
    hasPicture: boolean
    picture: types.IImageSource
    pictureWidth: number
    pictureRounded: boolean
    pictureBottomSpace: number
    pictureTopSpace: number
    pictureAspectRatio: number
    picturePosition: 'top' | 'bottom'
    pictureResizesCard: boolean
}

const ScrollCard: types.Brick<ScrollCardProps> = ({
                                                      eyebrow,
                                                      title,
                                                      text,
    width = 409,
    fullWidth,
                                                      hasPicture,
                                                      picture,
                                                      pictureWidth,
                                                      pictureRounded,
                                                      pictureBottomSpace,
                                                      pictureTopSpace,
                                                      pictureAspectRatio,
                                                      picturePosition,
                                                      pictureResizesCard,
                                                      ...rest
                                                  }) => {
    const imageBlock = hasPicture ? (
        <div
            style={{
                marginTop: picturePosition === 'bottom' ? `${pictureTopSpace}px` : '0px',
                marginBottom: picturePosition === 'top' ? `${pictureBottomSpace}px` : '0px',
            }}
        >
            <Image
                propName="picture"
                source={picture}
                alt="Card image"
                maxWidth={pictureWidth}
                aspectRatio={pictureAspectRatio}
                imageStyle={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: pictureRounded ? '20px' : '0px',
                }}
            />
        </div>
    ) : null

    const cardWidth = pictureResizesCard
        ? `${Math.max(200, Math.min(pictureWidth, 800))}px`
        : `${Math.max(200, width)}px`

    return (
        <article
            {...rest}
            className="w-[var(--card-width)] shrink-0 rounded-[28px] h-full bg-white px-[38px] py-[34px]"
            style={{
                "--card-width": fullWidth ? "100%" : cardWidth,
            } as React.CSSProperties}
        >
            {picturePosition === 'top' && imageBlock}

            <div className="mb-[18px]">
                <TypographyRichTextExt
                    propName="eyebrow"
                    value={eyebrow}
                    placeholder="Erster Eindruck"
                />
            </div>

            <div className="mb-4">
                <TypographyRichTextExt
                    propName="title"
                    value={title}
                    placeholder="Titel"
                />
            </div>

            <TypographyRichTextExt
                propName="text"
                value={text}
                placeholder="Beschreibung"
            />

            {picturePosition === 'bottom' && imageBlock}
        </article>
    )
}

ScrollCard.schema = {
    name: 'scroll-card',
    label: 'Scroll Card',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        eyebrow: [
            {
                type: 'p',
                children: [{ text: 'Erster Eindruck' }],
            },
        ],
        title: [
            {
                type: 'p',
                children: [{ text: 'Deine Webseite wird bewertet. Immer.' }],
            },
        ],
        text: [
            {
                type: 'p',
                children: [
                    {
                        text: 'Besucher entscheiden in Sekunden, ob sie bleiben oder weiterlesen. Was unklar wirkt oder veraltet erscheint, verliert schnell Vertrauen und Aufmerksamkeit.',
                    },
                ],
            },
        ],
        width: 409,
        hasPicture: false,
        pictureWidth: 320,
        pictureRounded: true,
        pictureBottomSpace: 16,
        pictureTopSpace: 16,
        pictureAspectRatio: 1.33,
        picturePosition: 'top',
        pictureResizesCard: false,
    }),
    sideEditProps: [
        {
            name:"width",
            label: "Card Width",
            type: types.SideEditPropType.Number,
        },
        {
            name:"fullWidth",
            label: "Full Width",
            type: types.SideEditPropType.Boolean,
        },
        {
            groupName: 'Picture',
            props: [
                {
                    name: 'hasPicture',
                    label: 'Has Picture',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: 'picture',
                    label: 'Picture',
                    type: types.SideEditPropType.Image,
                    show: (props: ScrollCardProps) => props.hasPicture,
                },
                {
                    name: 'picturePosition',
                    label: 'Picture Position',
                    type: types.SideEditPropType.Select,
                    show: (props: ScrollCardProps) => props.hasPicture,
                    selectOptions: {
                        display: types.OptionsDisplay.Radio,
                        options: [
                            { label: 'Top', value: 'top' },
                            { label: 'Bottom', value: 'bottom' },
                        ],
                    },
                },
                {
                    name: 'pictureResizesCard',
                    label: 'Picture Resizes Card',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollCardProps) => props.hasPicture,
                },
                {
                    name: 'pictureWidth',
                    label: 'Picture Width',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 120,
                        max: 800,
                        step: 10,
                    },
                    show: (props: ScrollCardProps) => props.hasPicture,
                },
                {
                    name: 'pictureAspectRatio',
                    label: 'Aspect Ratio',
                    type: types.SideEditPropType.Select,
                    show: (props: ScrollCardProps) => props.hasPicture,
                    selectOptions: {
                        display: types.OptionsDisplay.Select,
                        options: [
                            { label: 'Square', value: 1 },
                            { label: '4:3', value: 1.33 },
                            { label: '3:4', value: 0.75 },
                            { label: '16:9', value: 1.78 },
                        ],
                    },
                },
                {
                    name: 'pictureRounded',
                    label: 'Rounded Corners',
                    type: types.SideEditPropType.Boolean,
                    show: (props: ScrollCardProps) => props.hasPicture,
                },
                {
                    name: 'pictureBottomSpace',
                    label: 'Space Below Picture',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 0,
                        max: 80,
                        step: 4,
                    },
                    show: (props: ScrollCardProps) =>
                        props.hasPicture && props.picturePosition === 'top',
                },
                {
                    name: 'pictureTopSpace',
                    label: 'Space Above Picture',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 0,
                        max: 80,
                        step: 4,
                    },
                    show: (props: ScrollCardProps) =>
                        props.hasPicture && props.picturePosition === 'bottom',
                },
            ],
        },
    ],
}

export default ScrollCard
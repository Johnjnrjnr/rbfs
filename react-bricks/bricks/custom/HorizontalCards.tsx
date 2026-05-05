import { Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import HorizontalCardsScroller from './HorizontalCards.client'
import type { ScrollCardProps } from './ScrollCard'
import type { ScrollVideoCardProps } from '@/react-bricks/bricks/custom/ScrollVideoCard'
import type { ScrollProjectCardProps } from '@/react-bricks/bricks/custom/ScrollProjectsCard'
import {
    backgroundColorsEditProps,
    buttonColorsEditProps,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'

interface HorizontalCardsProps {
    kicker: types.TextValue
    title: types.TextValue
    showTitle: boolean
    ctaLabel: types.TextValue
    ctaText: types.TextValue
    ctaDescription: types.TextValue
    titleWidth: number
    CtaWidth: number
    showCta: boolean
    showCtaDescription: boolean
    cards: types.RepeaterItems<
        ScrollCardProps | ScrollVideoCardProps | ScrollProjectCardProps
    >
    backgroundColor: { color: string; className: string }
    buttonColor: {
        color: string
        classNameSolid: string
        classNameOutline: string
    }
}

const HorizontalCards: types.Brick<HorizontalCardsProps> = ({
                                                                kicker,
                                                                title,
    showTitle,
                                                                ctaLabel,
                                                                ctaText,
                                                                ctaDescription,
                                                                showCta,
                                                                titleWidth,
                                                                CtaWidth,
                                                                showCtaDescription,
                                                                cards,
                                                                backgroundColor,
                                                                buttonColor,
                                                            }) => {
    return (
        <section
            className={
                'overflow-visible ' +
                backgroundColor?.className
            }
        >

            <div className=" pt-[80px] md:pt-[180px] pb-[72px]">

                {showCta ? (<div className="mb-[90px] flex flex-col gap-8 lg:mb-14 start-padding end-padding ">
                        <div className="max-w-[500px]">
                            <TypographyRichTextExt
                                propName="kicker"
                                value={kicker}
                                placeholder="Kicker"
                            />
                        </div>

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            <div className="md:w-[var(--title-width)]"
                                 style={{"--title-width": titleWidth + "px"} as React.CSSProperties}>
                                <TypographyRichTextExt
                                    propName="title"
                                    value={title}
                                    placeholder="Title"
                                />
                            </div>

                            {showCtaDescription ? (
                                <div className="md:w-[var(--cta-width)] "
                                     style={{"--cta-width": CtaWidth + "px"} as React.CSSProperties}>
                                    <TypographyRichTextExt
                                        propName="ctaDescription"
                                        value={ctaDescription}
                                        placeholder="Description"
                                    />
                                    <div className="flex-1 min-h-full text-left  double-space-top triple-space-bottom">
                                        <div className="flex justify-end lg:justify-end">
                                            <div
                                                className="flex w-full justify-between items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
                                                <TypographyRichTextExt
                                                    propName="ctaLabel"
                                                    value={ctaLabel}
                                                    placeholder="CTA Label"
                                                />
                                                <div
                                                    className={
                                                        'rounded-full px-4 py-2 font-medium text-white ' +
                                                        buttonColor?.color +
                                                        ' ' +
                                                        buttonColor?.classNameOutline +
                                                        ' ' +
                                                        buttonColor?.classNameSolid
                                                    }
                                                >
                                                    <TypographyRichTextExt
                                                        propName="ctaText"
                                                        value={ctaText}
                                                        placeholder="CTA Text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                            {!showCtaDescription ? (
                                <div className="md:w-[var(--cta-width)] self-end"
                                     style={{"--cta-width": CtaWidth + "px"} as React.CSSProperties}>
                                    <div className="flex justify-end lg:justify-end">
                                        <div
                                            className="flex w-full justify-between items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
                                            <TypographyRichTextExt
                                                propName="ctaLabel"
                                                value={ctaLabel}
                                                placeholder="CTA Label"
                                            />
                                            <div
                                                className={
                                                    'rounded-full px-4 py-2 font-medium text-white ' +
                                                    buttonColor?.color +
                                                    ' ' +
                                                    buttonColor?.classNameOutline +
                                                    ' ' +
                                                    buttonColor?.classNameSolid
                                                }
                                            >
                                                <TypographyRichTextExt
                                                    propName="ctaText"
                                                    value={ctaText}
                                                    placeholder="CTA Text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>) : null}
                        </div>


                    </div>
                ) : showTitle ? (
                    <div className="flex flex-col items-center justify-center start-padding end-padding pb-[90px]">
                        <div className="max-w-[900px] max-h-[500px] ">
                            <div className="max-w-[500px] mb-[9px]">
                                <TypographyRichTextExt
                                    propName="kicker"
                                    value={kicker}
                                    placeholder="Kicker"
                                />
                            </div>
                            <div className="md:w-[var(--title-width)] mb-[54px]"
                                 style={{"--title-width": titleWidth + "px"} as React.CSSProperties}>
                                <TypographyRichTextExt
                                    propName="title"
                                    value={title}
                                    placeholder="Title"
                                />
                            </div>
                            {showCtaDescription ? (
                                <div className=" md:w-[var(--cta-width)] self-end"
                                     style={{"--cta-width": CtaWidth + "px"} as React.CSSProperties}>
                                    <TypographyRichTextExt
                                        propName="ctaDescription"
                                        value={ctaDescription}
                                        placeholder="Description"
                                    />
                                </div>
                            ) : null}

                        </div>

                    </div>
                ) : null}


                <HorizontalCardsScroller backgroundColor={backgroundColor}>
                    <Repeater
                        propName="cards"
                        items={cards}
                        renderItemWrapper={(item) => (
                            <div data-scroll-card className="shrink-0 data-scroll-card">
                                {item}
                            </div>
                        )}
                    />
                    <div className="md:min-w-[200px]"></div>
                </HorizontalCardsScroller>
            </div>
        </section>
    )
}

HorizontalCards.schema = {
    name: 'horizontal-cards',
    label: 'Horizontal Cards',
    category: 'layout',
    getDefaultProps: () => ({
        kicker: 'Webauftritte und Webapplikationen',
        title: 'Warum Webseiten 2026\nkeine zweite Chance\nbekommen.',
        ctaLabel: 'Du möchtest mehr darüber wissen?',
        ctaText: 'Mehr erfahren',
        ctaDescription: 'Noch mehr Einblicke und Details zu diesem Thema.',
        showCtaDescription: false,
        cards: [
            {
                type: 'scroll-card',
                props: {
                    eyebrow: 'Erster Eindruck',
                    title: 'Deine Webseite wird bewertet. Immer.',
                    text: 'Besucher entscheiden in Sekunden, ob sie bleiben oder weiterlesen.',
                    hasPicture: false,
                    pictureWidth: 320,
                    pictureRounded: true,
                    pictureBottomSpace: 16,
                    pictureTopSpace: 16,
                    pictureAspectRatio: 1.33,
                    picturePosition: 'top',
                    pictureResizesCard: false,
                },
            },
            {
                type: 'scroll-video-card',
                props: {
                    eyebrow: 'Video',
                    title: 'Bewegte Inhalte mit Wirkung.',
                    text: 'Mit starken Videoformaten lassen sich Inhalte emotional und klar transportieren.',
                    hasVideo: true,
                    videoWidth: 320,
                    videoRounded: true,
                    videoBottomSpace: 16,
                    videoTopSpace: 16,
                    videoAspectRatio: 1.5,
                    videoPosition: 'top',
                    videoResizesCard: false,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    controls: false,
                },
            },
        ],
    }),
    sideEditProps: [
        backgroundColorsEditProps,
        buttonColorsEditProps,
        {
            name: "showTitle",
            label: "Show Title",
            type: types.SideEditPropType.Boolean
        },
        {
            groupName: 'CTA',
            props: [

                {
                    name: 'showCta',
                    label: 'Show CTA',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: 'showCtaDescription',
                    label: 'Show CTA Description',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: "CtaWidth",
                    label: "Width CTA",
                    type: types.SideEditPropType.Number
                }
            ],
        },
        {
            groupName: 'Card',
            props: [
                {
                    name: "titleWidth",
                    label: "Title Width",
                    type: types.SideEditPropType.Number,
                }
            ]
        }
    ],
    repeaterItems: [
        {
            name: 'cards',
            items: [
                {
                    type: 'scroll-card',
                    label: 'Image Card',
                },
                {
                    type: 'scroll-video-card',
                    label: 'Video Card',
                },
                {
                    type: 'scroll-project-card',
                    label: 'Project Card',
                }
            ],
        },
    ],
}

export default HorizontalCards
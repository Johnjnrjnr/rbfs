import { Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import HorizontalCardsScroller from './HorizontalCards.client'
import type { ScrollCardProps } from './ScrollCard'
import type { ScrollVideoCardProps } from '@/react-bricks/bricks/custom/ScrollVideoCard'
import type { ScrollProjectCardProps } from '@/react-bricks/bricks/custom/ScrollProjectCard'
import {
    backgroundColorsEditProps,
    buttonColorsEditProps,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'

interface HorizontalCardsProps {
    kicker: types.TextValue
    title: types.TextValue
    ctaLabel: types.TextValue
    ctaText: types.TextValue
    ctaDescription: types.TextValue
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
                                                                ctaLabel,
                                                                ctaText,
                                                                ctaDescription,
                                                                showCta,
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
            <div className="pt-[180px] pb-[18px]">

                {showCta ? (<div className="mb-10 flex flex-col gap-8 lg:mb-14 start-padding end-padding ">
                    <div className="max-w-[500px]">
                        <TypographyRichTextExt
                            propName="kicker"
                            value={kicker}
                            placeholder="Kicker"
                        />
                    </div>

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-2">
                            <TypographyRichTextExt
                                propName="title"
                                value={title}
                                placeholder="Title"
                            />
                        </div>

                        {showCtaDescription ? (
                            <div className="flex-1 text-left ">
                                <TypographyRichTextExt
                                    propName="ctaDescription"
                                    value={ctaDescription}
                                    placeholder="Description"
                                />
                                <div className="flex-1 min-h-full text-left  double-space-top triple-space-bottom">
                                    <div className="flex justify-end lg:justify-end">
                                        <div className="flex items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
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
                        ) : (
                            <div />
                        )}
                        {!showCtaDescription ? (
                            <div className="flex-1 min-h-full text-left triple-space-bottom">
                                <div className="flex justify-end lg:justify-end">
                                    <div className="flex items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
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
                            </div>) : (<div></div>)}
                    </div>



                </div>
                ): (
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-[900px] max-h-[500px] ">
                            <div className="max-w-[500px] single-space-bottom">
                                <TypographyRichTextExt
                                    propName="kicker"
                                    value={kicker}
                                    placeholder="Kicker"
                                />
                            </div>
                            <div className="double-space-bottom">
                            <TypographyRichTextExt
                                propName="title"
                                value={title}
                                placeholder="Title"
                            />
                            </div>
                            {showCtaDescription ? (
                                <div className="flex-1 text-left triple-space-bottom">
                                    <TypographyRichTextExt
                                        propName="ctaDescription"
                                        value={ctaDescription}
                                        placeholder="Description"
                                    />
                                </div>
                            ) : (
                                <div />
                            )}

                        </div>

                    </div>
                )}


                <HorizontalCardsScroller>
                    <Repeater
                        propName="cards"
                        items={cards}
                        renderItemWrapper={(item) => (
                            <div data-scroll-card className="shrink-0">
                                {item}
                            </div>
                        )}
                    />
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
                    show: "showCta"
                },
            ],
        },
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
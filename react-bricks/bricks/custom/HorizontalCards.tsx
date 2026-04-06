import { Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import HorizontalCardsScroller from './HorizontalCards.client'
import type { ScrollCardProps } from './ScrollCard'

interface HorizontalCardsProps {
    kicker: types.TextValue
    title: types.TextValue
    ctaLabel: types.TextValue
    ctaText: types.TextValue
    cards: types.RepeaterItems<ScrollCardProps>
}

const HorizontalCards: types.Brick<HorizontalCardsProps> = ({
                                                                kicker,
                                                                title,
                                                                ctaLabel,
                                                                ctaText,
                                                                cards,
                                                            }) => {
    return (
        <section className="overflow-hidden bg-[#efefef] px-5 py-10 md:px-10 md:py-16">
            <div className="mx-auto max-w-[1440px]">
                <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-[760px]">
                        <div className="mb-3">
                            <TypographyRichTextExt
                                propName="kicker"
                                value={kicker}
                                placeholder="Kicker"
                            />
                        </div>

                        <TypographyRichTextExt
                            propName="title"
                            value={title}
                            placeholder="Title"
                        />
                    </div>

                    <div className="inline-flex items-center gap-3 self-start rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
                        <TypographyRichTextExt
                            propName="ctaLabel"
                            value={ctaLabel}
                            placeholder="CTA Label"
                        />
                        <div className="rounded-full bg-fuchsia-500 px-4 py-2 font-medium text-white">
                            <TypographyRichTextExt
                                propName="ctaText"
                                value={ctaText}
                                placeholder="CTA Text"
                            />
                        </div>
                    </div>
                </div>

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
        ctaText: 'Mehr erfahren'
    }),
    repeaterItems: [
        {
            name: 'cards',
            itemType: 'scroll-card',
            itemLabel: 'Card',
            min: 1,
            max: 10,
        },
    ],
}

export default HorizontalCards
import { types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ScrollCardProps {
    eyebrow: types.TextValue
    title: types.TextValue
    text: types.TextValue
}

const ScrollCard: types.Brick<ScrollCardProps> = ({
                                                      eyebrow,
                                                      title,
                                                      text,
                                                      ...rest
                                                  }) => {
    return (
        <article
            {...rest}
            className="w-[280px] shrink-0 rounded-[28px] bg-white p-6 md:w-[320px]"
        >
            <div className="mb-4">
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
    }),
}

export default ScrollCard
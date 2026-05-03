import { Image, Link, Repeater, Text, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import {ScrollCardProps} from "@/react-bricks/bricks/custom/ScrollCard";

interface CardGridProps {
    title: types.TextValue
    subtitle: types.TextValue
    primaryButtonText: types.TextValue
    primaryButtonHref: string
    secondaryButtonText: types.TextValue
    secondaryButtonHref: string
    hasButtons: boolean
    hasImage: boolean
    image: types.IImageSource
    columns: 2 | 3
    columnWidth: number
    cards: types.RepeaterItems<ScrollCardProps>
}

const CardGrid: types.Brick<CardGridProps> = ({
                                                  title,
                                                  subtitle,
                                                  primaryButtonText,
                                                  primaryButtonHref,
                                                  secondaryButtonText,
                                                  secondaryButtonHref,
                                                  hasButtons,
                                                  hasImage,
                                                  image,
                                                  columns,
    columnWidth,
    cards
                                              }) => {
    const gridCols = columns === 2 ? 'grid-cols-2' : 'grid-cols-3'

    return (
        <section className="w-full bg-white start-padding end-padding quad-space-top">
            {/* Header row */}
            <div className="bg-[#F5F5F7]">
            <div className="px-[90px] py-[126px]">
            <div className="flex items-start  justify-between mb-10 gap-8">
                <div className="">
                    <TypographyRichTextExt propName="title" value={title} placeholder="Section title" />
                    <div className="mt-3">
                        <TypographyRichTextExt propName="subtitle" value={subtitle} placeholder="Subtitle text" />
                    </div>
                </div>

                {hasButtons && (
                    <div className="flex items-center gap-2 shrink-0 mt-1" >

                            <div>
                                <Text
                                    propName="primaryButtonText"
                                    value={primaryButtonText}
                                    placeholder="Button"
                                    renderBlock={({ children }) => (
                                        <span className=" rounded-full flex flex-row gap-[20px] bg-[#707470] p-[10px] pl-[20px] items-center text-white">
                                        {children}

                                            <Link href={secondaryButtonHref}>
                                            <Text
                                                propName="secondaryButtonText"
                                                value={secondaryButtonText}
                                                placeholder="Button"
                                                renderBlock={({ children }) => (
                                                    <span className="inline-block px-4 py-2 rounded-full bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                                                        {children}
                                                    </span>
                                                )}
                                            />
                                            </Link>
                                    </span>
                                    )}
                                />
                            </div>
                    </div>
                )}
            </div>

            {/* Cards grid */}
            <div className={`grid ${gridCols} gap-4 mb-10`}>
                <Repeater propName="cards" items={cards} />
            </div>

            {/* Bottom image */}
            </div>
                {hasImage && (
                    <div className="rounded-[28px] overflow-hidden w-full">
                        <Image
                            propName="image"
                            source={image}
                            alt="Section image"
                            maxWidth={1200}
                            aspectRatio={2.2}
                            imageStyle={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

CardGrid.schema = {
    name: 'card-grid',
    label: 'Card Grid',
    getDefaultProps: () => ({
        title: [{ type: 'p', children: [{ text: 'Worauf unsere Webseiten/ Webapplikationen setzten.' }] }],
        subtitle: [{ type: 'p', children: [{ text: 'Für jedes Projekt setzen wir das passende Team zusammen.' }] }],
        primaryButtonText: [{ type: 'p', children: [{ text: 'Jetzt Anfragen' }] }],
        primaryButtonHref: '#',
        secondaryButtonText: [{ type: 'p', children: [{ text: 'Termin' }] }],
        secondaryButtonHref: '#',
        hasButtons: true,
        hasImage: true,
        columns: 3,
    }),
    repeaterItems: [
        {
            name: 'cards',
            itemType: 'scroll-card',
            itemLabel: 'Card',
            min: 1,
            max: 9,
        },
    ],
    sideEditProps: [
        {
            name: 'columns',
            label: 'Columns',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Radio,
                options: [
                    { label: '2 Columns', value: 2 },
                    { label: '3 Columns', value: 3 },
                ],
            },
        },
        {
          name: "columnWidth",
          label: "Column Width",
          type: types.SideEditPropType.Number
        },
        {
            name: 'hasButtons',
            label: 'Show Buttons',
            type: types.SideEditPropType.Boolean,
        },
        {
            name: 'primaryButtonHref',
            label: 'Primary Button URL',
            type: types.SideEditPropType.Text,
            show: (props: CardGridProps) => props.hasButtons,
        },
        {
            name: 'secondaryButtonHref',
            label: 'Secondary Button URL',
            type: types.SideEditPropType.Text,
            show: (props: CardGridProps) => props.hasButtons,
        },
        {
            name: 'hasImage',
            label: 'Show Bottom Image',
            type: types.SideEditPropType.Boolean,
        },
    ],
}

export default CardGrid
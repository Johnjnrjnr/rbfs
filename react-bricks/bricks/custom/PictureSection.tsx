import { Image, Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import {
    backgroundColorsEditProps,
    buttonColorsEditProps,
} from '@/react-bricks/bricks/react-bricks-ui/LayoutSideProps'

interface PictureSectionProps {
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
    backgroundColor: { color: string; className: string }
    buttonColor: {
        color: string
        classNameSolid: string
        classNameOutline: string
    }
    image: types.IImageSource
    imageAspectRatio: number
    imageRounded: boolean
}

const PictureSection: types.Brick<PictureSectionProps> = ({
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
                                                              backgroundColor,
                                                              buttonColor,
                                                              image,
                                                              imageAspectRatio,
                                                              imageRounded,
                                                          }) => {
    return (
        <section
            className={
                'overflow-visible ' +
                backgroundColor?.className
            }
        >
            <div className="pt-[80px] md:pt-[180px] pb-[72px]">

                {showCta ? (
                    <div className="mb-[90px] flex flex-col gap-8 lg:mb-14 start-padding end-padding">
                        <div className="max-w-[500px]">
                            <TypographyRichTextExt
                                propName="kicker"
                                value={kicker}
                                placeholder="Kicker"
                            />
                        </div>

                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            <div
                                className="md:w-[var(--title-width)]"
                                style={{ '--title-width': titleWidth + 'px' } as React.CSSProperties}
                            >
                                <TypographyRichTextExt
                                    propName="title"
                                    value={title}
                                    placeholder="Title"
                                />
                            </div>

                            {showCtaDescription ? (
                                <div
                                    className="md:w-[var(--cta-width)]"
                                    style={{ '--cta-width': CtaWidth + 'px' } as React.CSSProperties}
                                >
                                    <TypographyRichTextExt
                                        propName="ctaDescription"
                                        value={ctaDescription}
                                        placeholder="Description"
                                    />
                                    <div className="flex-1 min-h-full text-left double-space-top triple-space-bottom">
                                        <div className="flex justify-end lg:justify-end">
                                            <div className="flex w-full justify-between items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
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
                                <div
                                    className="md:w-[var(--cta-width)] self-end"
                                    style={{ '--cta-width': CtaWidth + 'px' } as React.CSSProperties}
                                >
                                    <div className="flex justify-end lg:justify-end">
                                        <div className="flex w-full justify-between items-center gap-3 rounded-full bg-neutral-500 p-1 pl-4 text-sm text-white">
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
                            )}
                        </div>
                    </div>
                ) : showTitle ? (
                    <div className="flex flex-col  start-padding end-padding pb-[90px]">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                <div className="max-w-[500px] mb-[9px]">
                                    <TypographyRichTextExt
                                        propName="kicker"
                                        value={kicker}
                                        placeholder="Kicker"
                                    />
                                </div>
                                <div
                                    className="md:w-[var(--title-width)] mb-[18px]"
                                    style={{ '--title-width': titleWidth + 'px' } as React.CSSProperties}
                                >
                                    <TypographyRichTextExt
                                        propName="title"
                                        value={title}
                                        placeholder="Title"
                                    />
                                </div>
                            </div>
                            {showCtaDescription ? (
                                <div
                                    className="md:w-[var(--cta-width)] md:self-end"
                                    style={{ '--cta-width': CtaWidth + 'px' } as React.CSSProperties}
                                >
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

                {/* Full width image */}
                <div className="start-padding end-padding">
                    <div className={imageRounded ? 'rounded-[28px] overflow-hidden' : 'overflow-hidden'}>
                        <Image
                            propName="image"
                            source={image}
                            alt="Section image"
                            maxWidth={1400}
                            aspectRatio={imageAspectRatio}
                            imageStyle={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

PictureSection.schema = {
    name: 'picture-section',
    label: 'Picture Section',
    getDefaultProps: () => ({
        kicker: [{ type: 'p', children: [{ text: 'Webauftritte und Webapplikationen' }] }],
        title: [{ type: 'p', children: [{ text: 'Warum Webseiten 2026 keine zweite Chance bekommen.' }] }],
        ctaLabel: [{ type: 'p', children: [{ text: 'Du möchtest mehr darüber wissen?' }] }],
        ctaText: [{ type: 'p', children: [{ text: 'Mehr erfahren' }] }],
        ctaDescription: [{ type: 'p', children: [{ text: 'Noch mehr Einblicke und Details zu diesem Thema.' }] }],
        showCta: true,
        showTitle: false,
        showCtaDescription: false,
        titleWidth: 500,
        CtaWidth: 400,
        imageAspectRatio: 2.2,
        imageRounded: true,
    }),
    sideEditProps: [
        backgroundColorsEditProps,
        buttonColorsEditProps,
        {
            name: 'showTitle',
            label: 'Show Title',
            type: types.SideEditPropType.Boolean,
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
                    name: 'CtaWidth',
                    label: 'Width CTA',
                    type: types.SideEditPropType.Number,
                },
            ],
        },
        {
            groupName: 'Title',
            props: [
                {
                    name: 'titleWidth',
                    label: 'Title Width',
                    type: types.SideEditPropType.Number,
                },
            ],
        },
        {
            groupName: 'Image',
            props: [
                {
                    name: 'imageAspectRatio',
                    label: 'Aspect Ratio',
                    type: types.SideEditPropType.Select,
                    selectOptions: {
                        display: types.OptionsDisplay.Select,
                        options: [
                            { label: "ultrawide" , value: 6.5 },
                            { label: 'Wide (21:9)', value: 2.33 },
                            { label: 'Cinematic (2.2:1)', value: 2.2 },
                            { label: 'Landscape (16:9)', value: 1.78 },
                            { label: 'Standard (4:3)', value: 1.33 },
                            { label: 'Square (1:1)', value: 1 },
                        ],
                    },
                },
                {
                    name: 'imageRounded',
                    label: 'Rounded Corners',
                    type: types.SideEditPropType.Boolean,
                },
            ],
        },
    ],
}

export default PictureSection
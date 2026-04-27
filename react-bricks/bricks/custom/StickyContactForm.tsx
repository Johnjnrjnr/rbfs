import { Image, Repeater, Text, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

import type { ContactFormGroupProps } from './ContactFormGroup'
import ContactFormShell from "@/react-bricks/bricks/custom/ContactFormShell.client";

export interface StickyContactFormProps {
    kicker: types.TextValue
    title: types.TextValue
    saleText: types.TextValue
    description: types.TextValue
    image: types.IImageSource
    submitText: types.TextValue

    leftColumnWidth: number
    stickyTop: number
    imageWidth: number
    imageAspectRatio: number
    rounded: boolean

    groups: types.RepeaterItems<ContactFormGroupProps>
}



const StickyContactForm: types.Brick<StickyContactFormProps> = ({
                                                                    kicker,
                                                                    title,
                                                                    description,
                                                                    image,
                                                                    submitText,
    saleText,
                                                                    leftColumnWidth,
                                                                    stickyTop,
                                                                    imageWidth,
                                                                    imageAspectRatio,
                                                                    rounded,
                                                                    groups,
                                                                }) => {
    return (
        <section className="bg-[#f3f3f3] w-full pt-[108px] pb-[108px]">
            <div className="mx-auto grid w-[1020px] justify-self-center gap-10 lg:grid-cols-[420px_1fr]">
                <div
                    style={{
                        width: `${leftColumnWidth}px`,
                        position: 'sticky',
                        top: `${stickyTop}px`,
                        alignSelf: 'start',
                    }}
                >
                    <div className="mb-2">
                        <TypographyRichTextExt
                            propName="kicker"
                            value={kicker}
                            placeholder="Kicker..."
                        />
                    </div>

                    <div className="mb-4">
                        <TypographyRichTextExt
                            propName="title"
                            value={title}
                            placeholder="Title..."
                        />
                    </div>

                    <div className="mb-6">
                        <TypographyRichTextExt
                            propName="description"
                            value={description}
                            placeholder="Description..."
                        />
                    </div>

                    <div
                        className="overflow-hidden"
                        style={{
                            width: `${imageWidth}px`,
                            aspectRatio: `${imageAspectRatio}`,
                            borderRadius: rounded ? '20px' : '0px',
                        }}
                    >
                        <Image
                            propName="image"
                            source={image}
                            alt="Contact form image"
                            maxWidth={1600}
                            imageStyle={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>

                <div className="mt-[170px]">
                    <ContactFormShell
                    >
                        <Repeater
                            propName="groups"
                            items={groups}
                            renderItemWrapper={(item) => item}
                        />
                        <div className="w-full bg-[#000]/40 rounded-full">
                            <div className="p-2 pl-[20px] flex justify-between items-center text-white">
                                <TypographyRichTextExt propName="saleText" value={saleText}/>
                                <button
                                    type="submit"
                                    className="rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white"
                                >
                                    <Text
                                        propName="submitText"
                                        value={submitText}
                                        placeholder="Submit text..."
                                        renderBlock={({ children }) => <span>{children}</span>}
                                    />
                                </button>
                            </div>
                        </div>
                    </ContactFormShell>
                </div>
            </div>
        </section>
    )
}

StickyContactForm.schema = {
    name: 'sticky-contact-form',
    label: 'Sticky Contact Form',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({
        kicker: 'Interesse geweckt?',
        title: 'Gemeinsam schauen wir an, was du brauchst.',
        description:
            'Damit du genau verstehst, welche Inhalte und Formate zu dir passen.',
        submitText: 'Jetzt Anfrage senden',
        leftColumnWidth: 360,
        stickyTop: 100,
        imageWidth: 220,
        imageAspectRatio: 3 / 4,
        rounded: true,
        groups: [
            {
                type: 'contact-form-group',
                props: {
                    title: 'Zielrichtung',
                    items: [
                        {
                            type: 'contact-form-option',
                            props: {
                                label: 'Sichtbarer werden',
                                name: 'goals',
                                value: 'visibility',
                                inputType: 'checkbox',
                                widthMode: 'half',
                            },
                        },
                        {
                            type: 'contact-form-option',
                            props: {
                                label: 'Vertrauen aufbauen',
                                name: 'goals',
                                value: 'trust',
                                inputType: 'checkbox',
                                widthMode: 'half',
                            },
                        },
                        {
                            type: 'contact-form-option',
                            props: {
                                label: 'Relevante Anfragen generieren',
                                name: 'goals',
                                value: 'leads',
                                inputType: 'checkbox',
                                widthMode: 'full',
                            },
                        },
                        {
                            type: 'contact-form-text-pair',
                            props: {
                                leftLabel: 'Vorname',
                                rightLabel: 'Nachname',
                                leftPlaceholder: 'Vorname',
                                rightPlaceholder: 'Nachname',
                                leftName: 'firstName',
                                rightName: 'lastName',
                                required: false,
                            },
                        },
                        {
                            type: 'contact-form-textarea',
                            props: {
                                label: 'Nachricht',
                                placeholder: 'Erzähl uns mehr...',
                                name: 'message',
                                required: false,
                                rows: 5,
                            },
                        },
                    ],
                },
            },
        ],
    }),
    sideEditProps: [
        {
            name: 'leftColumnWidth',
            label: 'Left Column Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 240,
                max: 600,
                step: 10,
            },
        },
        {
            name: 'stickyTop',
            label: 'Sticky Top',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 240,
                step: 4,
            },
        },
        {
            name: 'imageWidth',
            label: 'Image Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 120,
                max: 400,
                step: 10,
            },
        },
        {
            name: 'imageAspectRatio',
            label: 'Image Aspect Ratio',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { label: 'Vertical', value: 3 / 4 },
                    { label: 'Square', value: 1 },
                    { label: 'Horizontal', value: 4 / 3 },
                ],
            },
        },
        {
            name: 'rounded',
            label: 'Rounded Corners',
            type: types.SideEditPropType.Boolean,
        },
    ],
    repeaterItems: [
        {
            name: 'groups',
            itemType: 'contact-form-group',
            itemLabel: 'Group',
            min: 1,
            max: 8,
        },
    ],
}

export default StickyContactForm
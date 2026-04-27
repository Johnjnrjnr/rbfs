import { Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

import type { ContactFormOptionProps } from './ContactFormOption'
import type { ContactFormTextPairProps } from './ContactFormTextPair'
import type { ContactFormTextareaProps } from './ContactFormTextarea'

export interface ContactFormGroupProps {
    title: types.TextValue
    items: types.RepeaterItems<
        ContactFormOptionProps | ContactFormTextPairProps | ContactFormTextareaProps
    >
    kicker: types.TextValue
}

const ContactFormGroup: types.Brick<ContactFormGroupProps> = ({
                                                                  title,
                                                                  items,
    kicker,
                                                                  ...rest
                                                              }) => {
    return (
        <div {...rest} className="mb-6">
            <div className="mb-[4px]">
                <TypographyRichTextExt
                    propName="title"
                    value={title}
                    placeholder="Group title..."
                />
            </div>

            <div className="mb-[18px] text-blue-500">
                <TypographyRichTextExt propName="kicker" value={kicker}/>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <Repeater
                    propName="items"
                    items={items}
                    renderItemWrapper={(item) => item}
                />
            </div>
        </div>
    )
}

ContactFormGroup.schema = {
    name: 'contact-form-group',
    label: 'Contact Form Group',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        title: 'Group',
        kicker: 'Wie gehts?',
        items: [
            { type: 'contact-form-option', props: { label: 'Option 1' } },
            { type: 'contact-form-option', props: { label: 'Option 2' } },
        ],
    }),
    repeaterItems: [
        {
            name: 'items',
            items: [
                { type: 'contact-form-option', label: 'Option' },
                { type: 'contact-form-text-pair', label: '2 Text Inputs' },
                { type: 'contact-form-textarea', label: 'Textarea' },
            ],
        },
    ],
}

export default ContactFormGroup
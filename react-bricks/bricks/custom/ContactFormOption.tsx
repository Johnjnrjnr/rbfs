import {RichText, Text, types} from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ContactFormOptionProps {
    label: types.TextValue
    name: string
    value: string
    inputType: 'checkbox' | 'radio'
    widthMode: 'full' | 'half'
}

const ContactFormOption: types.Brick<ContactFormOptionProps> = ({
                                                                    label,
                                                                    name,
                                                                    value,
                                                                    inputType,
                                                                    widthMode,
                                                                    ...rest
                                                                }) => {
    const widthClass = widthMode === 'half' ? 'col-span-1' : 'col-span-2'

    return (
        <label
            {...rest}
            className={`${widthClass} group relative flex cursor-pointer items-center gap-3 rounded-[10px] border border-neutral-300 px-4 py-3 transition `}
        >
            <input
                type={inputType}
                name={name}
                value={value}
                className="peer sr-only"
            />

            <span
                className="
                              pointer-events-none absolute inset-0 rounded-[10px] bg-white transition
                              peer-checked:border-1 peer-checked:border-[#0040FF] peer-checked:bg-[#0400FF]/20 peer-checked:text-white
                            "
            />


            <span className="relative z-10 flex-1 ml-[5px] text-1 my-[5px]">
                <TypographyRichTextExt
                    propName="label"
                    value={label}
                    placeholder="Option..."
                />
              </span>
        </label>
    )
}

ContactFormOption.schema = {
    name: 'contact-form-option',
    label: 'Contact Form Option',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        label: 'Option',
        name: 'options',
        value: 'option',
        inputType: 'checkbox',
        widthMode: 'full',
    }),
    sideEditProps: [
        {
            groupName: 'Option',
            props: [
                {
                    name: 'name',
                    label: 'Field Name',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'value',
                    label: 'Value',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'inputType',
                    label: 'Input Type',
                    type: types.SideEditPropType.Select,
                    selectOptions: {
                        display: types.OptionsDisplay.Radio,
                        options: [
                            { label: 'Checkbox', value: 'checkbox' },
                            { label: 'Radio', value: 'radio' },
                        ],
                    },
                },
                {
                    name: 'widthMode',
                    label: 'Width',
                    type: types.SideEditPropType.Select,
                    selectOptions: {
                        display: types.OptionsDisplay.Radio,
                        options: [
                            { label: 'Full', value: 'full' },
                            { label: 'Half', value: 'half' },
                        ],
                    },
                },
            ],
        },
    ],
}

export default ContactFormOption
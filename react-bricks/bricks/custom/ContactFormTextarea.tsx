import { types, wrapClientComponent } from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ContactFormTextareaProps {
    label: types.TextValue
    placeholder: string
    name: string
    required: boolean
    rows: number
}

const schema: types.IBlockType<ContactFormTextareaProps> = {
    name: 'contact-form-textarea',
    label: 'Contact Form Textarea',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        label: 'Nachricht',
        placeholder: 'Erzähl uns mehr...',
        name: 'message',
        required: false,
        rows: 5,
    }),
    sideEditProps: [
        {
            groupName: 'Textarea',
            props: [
                {
                    name: 'placeholder',
                    label: 'Placeholder',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'name',
                    label: 'Name',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'required',
                    label: 'Required',
                    type: types.SideEditPropType.Boolean,
                },
                {
                    name: 'rows',
                    label: 'Rows',
                    type: types.SideEditPropType.Number,
                    rangeOptions: {
                        min: 2,
                        max: 12,
                        step: 1,
                    },
                },
            ],
        },
    ],
}

export default wrapClientComponent<ContactFormTextareaProps>({
    ClientComponent: ({ label, placeholder, name, required, rows }) => {
        return (
            <div>
                <div className="mb-2">
                    <TypographyRichTextExt
                        propName="label"
                        value={label}
                        placeholder="Label..."
                    />
                </div>

                <textarea
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                    className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-neutral-500"
                />
            </div>
        )
    },
    RegisterComponent,
    schema,
})
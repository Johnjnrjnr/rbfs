import { types, wrapClientComponent } from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface ContactFormTextPairProps {

    rightLabel: types.TextValue
    rightPlaceholder: string
    rightName: string
    required: boolean
}

const schema: types.IBlockType<ContactFormTextPairProps> = {
    name: 'contact-form-text-pair',
    label: 'Contact Form Text Pair',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        leftLabel: 'Vorname',
        rightLabel: 'Nachname',
        leftPlaceholder: 'Vorname',
        rightPlaceholder: 'Nachname',
        leftName: 'firstName',
        rightName: 'lastName',
        required: false,
    }),
    sideEditProps: [
        {
            groupName: 'Inputs',
            props: [
                {
                    name: 'rightPlaceholder',
                    label: 'Right Placeholder',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'rightName',
                    label: 'Right Name',
                    type: types.SideEditPropType.Text,
                },
                {
                    name: 'required',
                    label: 'Required',
                    type: types.SideEditPropType.Boolean,
                },
            ],
        },
    ],
}

export default wrapClientComponent<ContactFormTextPairProps>({
    ClientComponent: ({
                          rightLabel,
                          rightPlaceholder,
                          rightName,
                          required,
                      }) => {
        return (
            <div className="col-span-2">

                <div className="text-1">
                    <input
                        type="text"
                        name={rightName}
                        placeholder={rightPlaceholder}
                        required={required}
                        className="w-full rounded-md border border-neutral-300 bg-white px-[20px] py-[20px] text-sm text-black outline-none transition focus:border-neutral-500"
                    />
                </div>
            </div>
        )
    },
    RegisterComponent,
    schema,
})
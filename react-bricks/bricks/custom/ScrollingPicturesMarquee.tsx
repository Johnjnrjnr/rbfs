import {
    Repeater,
    isAdmin,
    types,
    wrapClientComponent,
} from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import ScrollingPicturesMarqueeClient from './ScrollingPicturesMarquee.client'
import type { MarqueeImageProps } from './MarqueeImage'

interface ScrollingPicturesMarqueeProps {
    images?: types.RepeaterItems<MarqueeImageProps>
    rowHeight: number
    gap: number
    speed: number
    rounded: boolean
}

const schema: types.IBlockType<ScrollingPicturesMarqueeProps> = {
    name: 'scrolling-pictures-marquee',
    label: 'Scrolling Pictures Marquee',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({}),
    sideEditProps: [
        {
            name: 'rowHeight',
            label: 'Row Height',
            type: types.SideEditPropType.Number,
            rangeOptions: { min: 100, max: 500, step: 10 },
        },
        {
            name: 'gap',
            label: 'Gap',
            type: types.SideEditPropType.Number,
            rangeOptions: { min: 0, max: 80, step: 2 },
        },
        {
            name: 'speed',
            label: 'Speed',
            type: types.SideEditPropType.Number,
            rangeOptions: { min: 8, max: 80, step: 1 },
        },
        {
            name: 'rounded',
            label: 'Rounded Corners',
            type: types.SideEditPropType.Boolean,
        },
    ],
    repeaterItems: [
        {
            name: 'images',
            itemType: 'marquee-image',
            itemLabel: 'Image',
            min: 1,
            max: 60,
        },
    ],
}

export default wrapClientComponent<ScrollingPicturesMarqueeProps>({
    ClientComponent: ({ images = [], rowHeight, gap, speed, rounded }) => {
        const imageUrls = images
            .map((item) => item.props?.image?.src)
            .filter((src): src is string => Boolean(src))

        const showEditorImages = isAdmin()

        return (
            <div className="relative">

                {showEditorImages ? (
                    <div className="mb-6 rounded-2xl border border-dashed border-gray-300 p-4">
                        <p className="mb-3 text-sm text-gray-500">Manage marquee images</p>
                        <Repeater
                            propName="images"
                            items={images}
                            renderItemWrapper={(item) => <div className="mb-3">{item}</div>}
                        />
                    </div>
                ) : null}

                <ScrollingPicturesMarqueeClient
                    images={imageUrls}
                    rowHeight={rowHeight}
                    gap={gap}
                    speed={speed}
                    rounded={rounded}
                />
            </div>
        )
    },
    RegisterComponent,
    schema,
})
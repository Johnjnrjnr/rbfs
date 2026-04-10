import { Repeater, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import {backgroundColorsEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";

interface StickyOverlayTitleProps {
    title: types.TextValue
    items: types.RepeaterItems
    titleWidth: number
    contentTopOffset: number
    topOffset: number
    bottomOffset: number
    leftOffset: number

    backgroundColor: { color: string, className: string }
}

const StickyOverlayTitle: types.Brick<StickyOverlayTitleProps> = ({
                                                                      title,
                                                                      items,
                                                                      titleWidth,
                                                                      contentTopOffset,
                                                                      topOffset,
                                                                        bottomOffset,
                                                                      leftOffset,
    backgroundColor
                                                                  }) => {
    return (
        <section className={"relative text-white start-padding end-padding " + backgroundColor?.className}>
            <div className="relative ">
                <div
                    className="pointer-events-none absolute left-0 top-0 z-20 h-full"
                    style={{
                        width: `${titleWidth + leftOffset}px`,
                    }}
                >
                    <div
                        className="pointer-events-auto bg-black hard-shadow"
                        style={{
                            position: 'sticky',
                            top: `0px`,
                            left: `${leftOffset}px`,
                            width: `${titleWidth}px`,
                            marginLeft: `${leftOffset}px`,
                            marginBottom: `${bottomOffset}px`,
                            paddingTop: `${topOffset}px`,
                        }}
                    >
                        <TypographyRichTextExt
                            propName="title"
                            value={title}
                            placeholder="Title..."
                        />
                    </div>
                </div>

                <div
                    className="relative z-10 "
                    style={{
                        width: `100%`,
                        paddingTop: `${contentTopOffset}px`,
                        gap: "64px"
                    }}
                >
                    <Repeater
                        propName="items"
                        items={items}
                        renderItemWrapper={(item) => (
                            <div className="pb-16">
                                {item}
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    )
}

StickyOverlayTitle.schema = {
    name: 'StickyOverlayTitle',
    label: 'Sticky Overlay Title',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({
        titleWidth: 420,
        contentWidth: 900,
        topOffset: 80,
        bottomOffset: 60,
        leftOffset: 64,
        title: [
            {
                type: 'p',
                children: [{ text: 'Your title' }],
            },
        ],
    }),
    sideEditProps: [
        {
            name: 'titleWidth',
            label: 'Title Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 150,
                max: 900,
                step: 10,
            },
        },
        {
            name: 'contentTopOffset',
            label: 'Content Top Offset',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 300,
                max: 2000,
                step: 10,
            },
        },
        {
            name: 'topOffset',
            label: 'Sticky Top Offset',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 300,
                step: 5,
            },
        },
        {
            name: 'bottomOffset',
            label: 'Sticky Bottom Offset',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 300,
                step: 5,
            },
        },
        {
            name: 'leftOffset',
            label: 'Left Offset',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 200,
                step: 5,
            },
        },
        backgroundColorsEditProps
    ],
    repeaterItems: [
        {
            name: 'items',
            items: [
                {
                    type: 'ImageRightTextLeft',
                    label: 'Image Right Text Left',
                },
                {
                    type: 'VerticalVideo',
                    label: 'Vertical Video',
                },
            ],
        },
    ],
}

export default StickyOverlayTitle
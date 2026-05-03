import { Repeater, isAdmin, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'
import {backgroundColorsEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import React from "react";
import StepScrollBLockClient from "@/react-bricks/bricks/custom/StepScrollBLockClient";

interface StickyOverlayTitleProps {
    title: types.TextValue
    items: types.RepeaterItems
    titleWidth: number
    contentTopOffset: number
    topPadding: number
    topMargin: number
    bottomOffset: number
    leftOffset: number

    backgroundColor: { color: string, className: string }
}

const StickyOverlayTitle: types.Brick<StickyOverlayTitleProps> = ({
                                                                      title,
                                                                      items,
                                                                      titleWidth,
                                                                      contentTopOffset,
                                                                      topPadding,
                                                                  topMargin,
                                                                        bottomOffset,
                                                                      leftOffset,
    backgroundColor
                                                                  }) => {

    const admin = isAdmin();
    return (
        <section className={"relative text-white start-padding end-padding  " + backgroundColor?.className}>


            <div className="relative ">
                <div
                    className="pointer-events-none absolute left-0 top-0 h-full w-full md: w-[var(--full-width)] "
                    style={{
                        "--full-width": `${Number(titleWidth) + Number(leftOffset)}px`,
                    } as React.CSSProperties }
                >
                    <div
                        className="pointer-events-auto bg-black sticky-title hard-shadow pl-[var(--left-margin)] w-[var(--title-width)] mt-[var(--top-margin)] pt-[var(--top-padding)] mb-[270px]"
                        style={{
                            "--left-offset": `${leftOffset}px`,
                            "--title-width": `${titleWidth}px`,
                            "--left-margin": `${leftOffset}px`,
                            "--bottom-offset": `${bottomOffset}px`,
                            "--top-margin": `${topMargin}px`,
                            "--top-padding": `${topPadding}px`,
                        } as React.CSSProperties }
                    >
                        <TypographyRichTextExt
                            propName="title"
                            value={title}
                            placeholder="Title..."
                        />
                    </div>
                </div>

                <div
                    className="relative z-10 w-full overflow-full"
                    style={{
                        paddingTop: `${contentTopOffset}px`,
                    }}
                >{ admin ? (
                    <Repeater
                        propName="items"
                        items={items}
                        renderItemWrapper={(item) => (
                            <div className="">
                                {item}
                            </div>
                        )}
                    />

            ) : (
                    <StepScrollBLockClient>
                        <Repeater
                            propName="items"
                            items={items}
                            renderItemWrapper={(item) => (
                                <div className="w-full">
                                    {item}
                                </div>
                            )}
                        />
                    </StepScrollBLockClient>
                )
                }
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
            name: 'topPadding',
            label: 'Sticky Top Padding',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 300,
                step: 5,
            },
        },
        {
            name: 'topMargin',
            label: 'Sticky Top Margin',
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
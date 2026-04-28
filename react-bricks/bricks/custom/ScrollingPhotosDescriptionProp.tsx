import {Image, Repeater, RichText, Text, types} from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import {VerticalImageProps} from "@/react-bricks/bricks/custom/VerticalImageProps";
import {useRef} from "react";
import {VerticalVideoProps} from "@/react-bricks/bricks/custom/VerticalVideoProps";
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";
import HorizontalCardsScroller from "@/react-bricks/bricks/custom/HorizontalCards.client";

//=============================
// Local Types
//=============================

interface ScrollingPhotosDescription {
    title: types.TextValue,
    description: types.TextValue,
    VerticalVideo: types.RepeaterItems<VerticalVideoProps>,
    titleWidth: number,
    textWidth: number,
    itemWidth: number,

}

//=============================
// Component to be rendered
//=============================
const ScrollingPhotosDescriptionProp: types.Brick<ScrollingPhotosDescription> = ({
    title,
    description,
    VerticalVideo,
    titleWidth,
    textWidth,
    itemWidth
                                                             }) => {





    return (

        <div className="scrolling-photos-container bg-[#F5F5F7] block-container pl-[54px]">

                <div className="md:ml-[54px]+">
                    <div className="start-padding end-padding">
                        <div className="md:w-[var(--title-width)] single-space-bottom"
                             style={{"--title-width": titleWidth +"px"} as React.CSSProperties}>
                            <TypographyRichTextExt propName="title" value={title}/>
                        </div>
                        <div className="md:w-[var(--text-width)] quad-space-bottom"
                             style={{"--text-width": textWidth + "px"} as React.CSSProperties}>
                            <TypographyRichTextExt propName="description" value={description}/>

                        </div>

                    </div>
                    <div className="scroller">
                        <HorizontalCardsScroller backgroundColor={{color: "white",className: "bg-white"}}>
                            <Repeater
                                propName="VerticalVideo"
                                items={VerticalVideo}
                                renderItemWrapper={(items) => (
                                    <div className="item data-scroll-card">
                                        {items}
                                    </div>
                                )}
                            />
                            <div className=" min-w-[20px] md:min-w-[200px]">
                            </div>
                        </HorizontalCardsScroller>
                    </div>
                </div>
            </div>
    )
}

//=============================
// Brick Schema
//=============================
ScrollingPhotosDescriptionProp.schema = {
    name: 'ScrollingPhotosDescription',
    label: 'ScrollingPhotosDescription',
    previewImageUrl: `/bricks-preview-images/pokemon.png`,
    getDefaultProps: () => ({
    }),
    sideEditProps: [
        {
            name: 'titleWidth',
            label: 'Title Box Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 5,
                step: 5,

            }
        },
        {
            name: 'textWidth',
            label: 'Text Box Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 5,
                step: 5

            }
        },
        {
            name: 'itemWidth',
            label: 'Array Item Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 5,
                step: 5

            }
        },
    ],
    repeaterItems: [
        {
            name: 'VerticalVideo',
            itemType: "VerticalVideo",
            label: 'Vertical Videos',

        }
    ]
}

export default ScrollingPhotosDescriptionProp

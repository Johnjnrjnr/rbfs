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

        <div className="scrolling-photos-container bg-white block-container">
            <div className="spacer">

            </div>

                <div>
                    <div className="start-padding">
                        <div className="single-space-bottom"
                             style={{
                                 width: `${titleWidth}px`
                             }}
                        >
                            <TypographyRichTextExt propName="title" value={title}/>
                        </div>
                        <div className="quad-space-bottom"
                             style={{
                                 width: `${textWidth}px`
                             }}
                        >
                            <TypographyRichTextExt propName="description" value={description}/>

                        </div>

                    </div>
                    <div className="scroller">
                        <HorizontalCardsScroller>
                            <Repeater
                                propName="VerticalVideo"
                                items={VerticalVideo}
                                renderItemWrapper={(items) => (
                                    <div className="item">
                                        {items}
                                    </div>
                                )}
                            />
                            <div style={{minWidth: "200px"}}>
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

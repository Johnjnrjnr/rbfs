import {Image, Repeater, RichText, Text, types} from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import {VerticalImageProps} from "@/react-bricks/bricks/custom/VerticalImageProps";
import {useRef} from "react";

//=============================
// Local Types
//=============================

interface ScrollingPhotosDescription {
    title: types.TextValue,
    description: types.TextValue,
    VerticalImages: types.RepeaterItems<VerticalImageProps>,
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
    VerticalImages,
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
                            <Text
                                propName="title"
                                value={title}
                                renderBlock={({children}) => (
                                    <h1 className="text-7xl">
                                        {children}
                                    </h1>
                                )}
                                placeholder="Title..."

                            />
                        </div>
                        <div className="quad-space-bottom"
                             style={{
                                 width: `${textWidth}px`
                             }}
                        >
                            <Text
                                propName="description"
                                value={description}
                                renderBlock={({children}) => (
                                    <h1 className="text-3xl">
                                        {children}
                                    </h1>
                                )}
                            />

                        </div>

                    </div>
                    <div className="scroller start-padding">
                        <div className="grid-container-row" style={{
                            gridAutoColumns: `${itemWidth}px`
                        }}>
                            <Repeater
                                propName="VerticalImages"
                                items={VerticalImages}
                                renderItemWrapper={(items) => (
                                    <div className="item">
                                        {items}
                                    </div>
                                )}
                            />
                            <div style={{width: "200px"}}>
                            </div>
                        </div>
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
            name: 'VerticalImages',
            itemType: "VerticalImage",
            label: 'Vertical Images',

        }
    ]
}

export default ScrollingPhotosDescriptionProp

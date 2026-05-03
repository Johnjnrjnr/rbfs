import { Image, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";

//=============================
// Local Types
//=============================

export interface IconDisplayProps {
    image?: types.IImageSource,
    pictureWidth: number,
}

//=============================
// Component to be rendered
//=============================
const IconDisplay: types.Brick<IconDisplayProps> = ({
                                                            image,
                                                            pictureWidth
                                                        }) => {



    return (
        <div
            className="w-[20px] md:w-[var(--width)]"
            style={{"--width": pictureWidth +"px"} as React.CSSProperties }>

            <Image
                propName="image"
                alt="image"
                source={image}
                aspectRatio={1}
                imageStyle={{width: pictureWidth+"px"}}

            />

        </div>
    )
}

//=============================
// Brick Schema
//=============================
IconDisplay.schema = {
    name: 'IconDisplay',
    label: 'Icon Display',
    previewImageUrl: `/bricks-preview-images/pokemon.png`,
    getDefaultProps: () => ({
        picAspectRatio: 1,
        textSize: "Medium",
        pictureWidth: 400
    }),
    sideEditProps: [
        {
            name: 'pictureWidth',
            label: 'Picture Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 200,
            }
        },

    ],
}

export default IconDisplay

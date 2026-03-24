import { Image, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";

//=============================
// Local Types
//=============================

export interface IconDisplayProps {
    image: types.IImageSource,
    pictureWidth: number,
    title: string,
}

//=============================
// Component to be rendered
//=============================
const IconDisplay: types.Brick<IconDisplayProps> = ({
                                                            image,
                                                            pictureWidth,
    title
                                                        }) => {



    return (
        <div>
            <Text propName="Teext" value={title}></Text>

            <Image
                propName="Video"
                alt="Video"
                source={image}
                aspectRatio={1}
                maxWidth={pictureWidth}

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

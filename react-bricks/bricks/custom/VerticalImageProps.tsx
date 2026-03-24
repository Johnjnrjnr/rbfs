import { Image, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";

//=============================
// Local Types
//=============================

export interface VerticalImageProps {
    image: types.IImageSource
    rounded: boolean
    title: string
    picAspectRatio: number
    pictureWidth: number,
    textSize: string
}

//=============================
// Component to be rendered
//=============================
const VerticalImage: types.Brick<VerticalImageProps> = ({
    image,
    title,
    rounded,
    picAspectRatio,
    pictureWidth,
    textSize
}) => {



    return (
        <span>

            <Image
                propName="image"
                alt="Video"
                source={image}
                aspectRatio={picAspectRatio}
                maxWidth={pictureWidth}
                imageStyle={rounded ? {borderRadius: "10px"} : {}}

            />

            <Text
                propName="title"
                value={title}
                renderBlock={({children}) => (
                    <h1 className={"single-space-top " + textSize}>
                        {children}
                    </h1>
                )}
                placeholder="Title..."

            />

        </span>
    )
}

//=============================
// Brick Schema
//=============================
VerticalImage.schema = {
    name: 'VerticalImage',
    label: 'VerticalImage',
    previewImageUrl: `/bricks-preview-images/pokemon.png`,
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        picAspectRatio: 1,
        textSize: "Medium",
        pictureWidth: 400
    }),
    sideEditProps: [
        {
            name: 'picAspectRatio',
            label: 'Aspect Ratio',
            type: types.SideEditPropType.Select,
            selectOptions:{
                display: types.OptionsDisplay.Select,
                options: [
                    {
                        label: "Vertical",
                        value: 0.75
                    },
                    {
                        label: "Square",
                        value: 1
                    },
                    {
                        label: "Horizontal",
                        value: 1.5
                    }
                ]
            }
        },
        {
            name: 'rounded',
            label: 'Rounded Corners',
            type: types.SideEditPropType.Boolean,

        },
        {
            name: 'pictureWidth',
            label: 'Picture Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 200,
            }
        },
        {
            name: 'textSize',
            label: 'TextSize',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Radio,
                options: [
                    {
                        label: "Large",
                        value: "text-4xl"
                    },
                    {
                        label: "Medium",
                        value: "text-2xl"
                    },
                    {
                        label: "Small",
                        value: ""
                    }

                ]
            }
        },
    ],
}

export default VerticalImage

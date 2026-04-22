import { Image, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";

//=============================
// Local Types
//=============================

export interface VerticalImageProps {
    image: types.IImageSource
    rounded: boolean
    picAspectRatio: number
    pictureWidth: number,
    buttonLinkText: string,
    kicker: string,
    title: string,
}

//=============================
// Component to be rendered
//=============================
const VerticalImage: types.Brick<VerticalImageProps> = ({
    image,
    rounded,
    picAspectRatio,
    pictureWidth,
                                                            buttonLinkText,
    kicker,
    title
}) => {



    return (
        <span>
             <div className="ml-[36px] double-space-top">
                                <TypographyRichTextExt propName="kicker" value={kicker} placeholder="Kicker.."/>
                            </div>
                            <div className="ml-[36px] mt-[9px]">
                                <TypographyRichTextExt propName="title" value={title} placeholder="Title..."/>
                            </div>
                            <div className="rounded-full bg-blue-700 max-w-[40%] ml-[36px] px-4 py-2 double-space-bottom  single-space-top text-white align-middle">
                                <TypographyRichTextExt
                                    propName="buttonLinkText"
                                    value={buttonLinkText}
                                    placeholder="Button link text"
                                />
                            </div>
            <Image
                propName="image"
                alt="Video"
                source={image}
                aspectRatio={picAspectRatio}
                maxWidth={pictureWidth}
                imageStyle={rounded ? {borderRadius: "10px"} : {}}

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
                        value: 4/3
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

    ],
}

export default VerticalImage

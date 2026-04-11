import {Image, Repeater, RichText, Text, types} from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import {VerticalImageProps} from "@/react-bricks/bricks/custom/VerticalImageProps";
import IconDisplay, {IconDisplayProps} from "@/react-bricks/bricks/custom/IconDisplay";
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";

//=============================
// Local Types
//=============================

export interface PictureIconArray {
    textWidth: number;
    titleWidth: number;
    title: string,
    kicker: types.TextValue
    description: string,
    VerticalImages: types.RepeaterItems<VerticalImageProps>,
    personalIcon: types.IImageSource,
    IconDisplays: types.RepeaterItems<IconDisplayProps>,
    buttonLinkText: types.TextValue,
    iconTitle: string
}

//=============================
// Component to be rendered
//=============================
const PictureIconArrayProp: types.Brick<PictureIconArray> = ({
                                                            textWidth,
                                                            titleWidth,
                                                            description,
                                                            title,
                                                                 personalIcon,
    kicker,
                                                            VerticalImages,
                                                                 IconDisplays,
    buttonLinkText,
                                                            iconTitle
                                                        }) => {



    return (
        <div className="background-box start-margin end-margin quad-space-bottom quad-space-top">
            <div>
                <TypographyRichTextExt propName="title" value={title}/>
            </div>

            <div>
                <TypographyRichTextExt propName="description" value={description}/>
            </div>
            <div className="grid-3xAny quad-space-top"
            style={{

            }}
            >
                <Repeater
                    propName="VerticalImages"
                    items={VerticalImages}
                    renderItemWrapper={(item) => (
                        <div className="background-box item flex-col " style={{
                            backgroundColor: "var(--color-white)",
                            padding: "0px"
                        }}>
                            {item}
                        </div>
                    )}
                />

            </div>
            <div className="flex flex-col justify-center justify-items-center">
                <div className=" flex justify-center quad-space-top double-space-bottom">
                    <IconDisplay title="personalIcon" image={personalIcon} pictureWidth={50} />
                    <TypographyRichTextExt propName="iconTitle" value={iconTitle}/>
                </div>
            </div>
            <div className="iconDisplay">
                <Repeater propName="IconDisplays" items={IconDisplays} />
            </div>
        </div>
    )
}

//=============================
// Brick Schema
//=============================
PictureIconArrayProp.schema = {
    name: 'PictureIconArray',
    label: 'Picture and Icon Array',
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
    ],
    repeaterItems: [
        {
            name: 'VerticalImages',
            itemType: "VerticalImage",
            label: 'Vertical Images',
        },
        {
            name: 'IconDisplays',
            itemType: "IconDisplay",
            label: 'Icons',
        }
    ]
}

export default PictureIconArrayProp

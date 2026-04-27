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
    ctaText: types.TextValue
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
    ctaText,
                                                            iconTitle
                                                        }) => {



    return (
        <div className="background-box pt-[90px] pl-[126px] pr-[126px] pb-[90px] end-margin ml-[256px] quad-space-bottom quad-space-top  ">
            <link rel="stylesheet" href="https://use.typekit.net/wzt4dbz.css"/>
            <div className="flex flex-row justify-between mb-[36px] md:mb-[36px]">
                <div className=" md:w-[var(--title-width)]"
                style={{"--title-width": titleWidth + "px"} as React.CSSProperties}
                >
                    <TypographyRichTextExt propName="title" value={title}/>
                </div>

                <div className="flex w-[180px] h-[50px] rounded-full bg-[#0400FF] align-self-end self-end items-center justify-center text-1 "><TypographyRichTextExt propName="ctaText" placeholder="Testemonials" value={ctaText}/></div>
            </div>
            <div className="md:w-[var(--text-width)]"
                style={{"--text-width": textWidth + "px"} as React.CSSProperties}>
                <TypographyRichTextExt propName="description" value={description}/>
            </div>
            <div className="grid-3xAny quad-space-top">
                <Repeater
                    propName="VerticalImages"
                    items={VerticalImages}
                    renderItemWrapper={(item) => (
                        <div className="background-box item w-full" style={{
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
                    <div className="w-[20px] md:w-[50px]">

                        <Image
                            propName="personalIcon"
                            alt="image"
                            source={personalIcon}
                            aspectRatio={1}
                            containerClassName="w-[20px] md:w-[50px]"

                        />

                    </div>
                    <div className="text-center">
                    <TypographyRichTextExt propName="iconTitle" value={iconTitle}/>
                    </div>
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
        ctaText: "Testemonials",

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

import { File, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import { typographySideEditProp } from '@/react-bricks/bricks/react-bricks-ui/typogrophy'
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";
import IconDisplay from "@/react-bricks/bricks/custom/IconDisplay";


//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HomeHeaderProps {
    title: types.TextValue
    text: types.TextValue
    icon: types.IImageSource
    highlightTextColor: { color: string; className: string }
    backgroundVideo: types.IFileSource
    hasIcon: boolean
    hasKicker: boolean
    contentCenter: boolean
    width: number
    typography: string
}

//=============================
// Component to be rendered
//=============================
const HomeHeader: types.Brick<HomeHeaderProps> = ({
                                                    highlightTextColor = highlightTextColors.LIME.value,
                                                    title,
                                                    text,
    icon,
                                                    backgroundVideo,
                                                    width,
    hasIcon,
    hasKicker,
    contentCenter,
                                                    typography
                                                }) => {
    return (
        <section className="home-header-video">

            <div className="home-header-video__bg">
                <File
                    propName="backgroundVideo"
                    source={backgroundVideo}
                    allowedExtensions={['.mp4', '.webm', '.mov']}
                    renderBlock={(file) =>
                        file ? (
                            <video
                                src={file.url}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false}
                                className="home-header-video__media"
                            />
                        ) : (
                            <div className="home-header-video__fallback">
                                Click to upload background video
                            </div>
                        )
                    }
                />
            </div>

            <div className="home-header-video__overlay"/>

            <div
                className={
                    "home-header-video__content mb-[10rem] " + typography + " " + highlightTextColor.className +
                    (contentCenter ? " flex flex-col items-center text-center m-0 " : " ml-[202px] ")
                }
            >
                <div style={{ width: width + "px"}}>
                    { hasIcon ? (
                        <div className={contentCenter ? "justify-items-center" : ""}>
                            <IconDisplay pictureWidth={50} image={icon}/>

                        </div>

                    ) : null}
                    { hasKicker ? (
                        <TypographyRichTextExt propName="title" value={title}/>
                    ): null}
                    <TypographyRichTextExt propName="text" value={text}/>
                </div>
            </div>
        </section>
    )
}

//=============================
// Brick Schema
//=============================
HomeHeader.schema = {
    name: 'home-header-unit',
    label: 'home-header-unit',
    previewImageUrl: `/bricks-preview-images/pokemon.png`,
    getDefaultProps: () => ({
        padding: 'big',
        highlightTextColor: highlightTextColors.SKY.value,
        background: undefined,
        width: 20

    }),
    sideEditProps: [
        typographySideEditProp,

        {
          name: "hasIcon",
          label: 'Icon',
          type: types.SideEditPropType.Boolean
        },
        {
          name:"hasKicker",
          label: "Kicker",
          type: types.SideEditPropType.Boolean
        },
        {
          name: "contentCenter",
          label: "Center Content",
          type: types.SideEditPropType.Boolean
        },
        {
            name: 'width',
            label: 'Text Box Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 5,
                step: 5

            }
        },
        highlightTextEditProps
    ],
}

export default HomeHeader

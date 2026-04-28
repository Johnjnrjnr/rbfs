import { File, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";
import { typographySideEditProp } from '@/react-bricks/bricks/react-bricks-ui/typogrophy'
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";


//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HomeHeaderProps {
    title: types.TextValue
    text: types.TextValue
    highlightTextColor: { color: string; className: string }
    backgroundVideo: types.IFileSource
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
                                                    backgroundVideo,
                                                    width,
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
                    'home-header-video__content ' +
                    highlightTextColor.className +
                    ' ' +
                    typography
                }
            >
                <TypographyRichTextExt propName="title" value={title}/>
                <TypographyRichTextExt propName="text" value={text}/>
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
            name: 'padding',
            label: 'Padding',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    { value: 'big', label: 'Big Padding' },
                    { value: 'small', label: 'Small Padding' },
                ],
            },
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

import { Image, RichText, Text, types } from 'react-bricks/rsc'
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
    background: types.IImageSource
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
                                                    background,
                                                    width,
                                                    typography
                                                }) => {
    return (
        <div className="dark:bg-gray-900 h-screen"
             style={{
                 display: "flex",
                 backgroundImage: background?.src
                     ? `url(${background.src})`
                     : undefined,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 verticalAlign: "bottom",
                 justifyContent: "flex-end",
                 flexDirection: "column"

             }}>
            <div
                className={highlightTextColor.className + ' ' + typography}
                style={{
                    width: `${width}px`,
                    marginLeft: "10rem",
                    marginBottom: "10rem"
                }}

            >
                <TypographyRichTextExt propName="title" value={title}/>
                <TypographyRichTextExt propName="text" value={text}/>
            </div>
        </div>
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

            name: 'background',
            label: 'Background Image',
            type: types.SideEditPropType.Image,
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

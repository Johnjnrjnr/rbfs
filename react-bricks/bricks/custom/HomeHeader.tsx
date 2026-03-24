import { Image, RichText, Text, types } from 'react-bricks/rsc'
import {black} from "next/dist/lib/picocolors";
import {highlightTextEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import {highlightTextColors} from "@/react-bricks/bricks/react-bricks-ui/colors";

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
}

//=============================
// Component to be rendered
//=============================
const HomeHeader: types.Brick<HomeHeaderProps> = ({
                                                    highlightTextColor = highlightTextColors.LIME.value,
                                                    title,
                                                    text,
                                                    background,
                                                    width
                                                }) => {
    return (
        <div className="dark:bg-gray-900"
             style={{
                 display: "flex",
                 height: "50rem",
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
                className={highlightTextColor.className}
                style={{
                    width: `${width}%`,
                    marginLeft: "10rem",
                    marginBottom: "10rem"
                }}

            >
                <RichText
                    propName="title"
                    value={title}
                    renderBlock={(props) => (
                        <h1>
                            {props.children}
                        </h1>
                    )}
                    renderPlaceholder={(props) => (
                        <h1 className="opacity-30"> {props.children}</h1>
                    )}
                    placeholder="Type a title..."
                    allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                        types.RichTextFeatures.Highlight,
                        types.RichTextFeatures.Code,
                        types.RichTextFeatures.Link,
                        types.RichTextFeatures.Heading1,
                        types.RichTextFeatures.Heading2
                    ]}
                    renderH1={(props) =>(
                        <h1 className="text-4xl">
                            {props.children}
                        </h1>
                    )}
                    renderH2={(props) =>(
                        <h2 className="text-xl">
                            {props.children}
                        </h2>
                    )}
                    renderCode={(props) => (
                        <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded-sm">
                            {props.children}
                        </code>
                    )}
                />
                <RichText
                    propName="text"
                    value={text}
                    renderBlock={(props) => (
                        <h1 className="text-start dark:text-gray-500">
                            {props.children}
                        </h1>
                    )}
                    placeholder="Type a text..."
                    allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                        types.RichTextFeatures.Highlight,
                        types.RichTextFeatures.Code,
                        types.RichTextFeatures.Link,
                        types.RichTextFeatures.Heading1,
                        types.RichTextFeatures.Heading2
                    ]}
                    renderH1={(props) =>(
                        <h1 className="text-4xl">
                            {props.children}
                        </h1>
                    )}
                    renderH2={(props) =>(
                        <h2 className="text-xl">
                            {props.children}
                        </h2>
                    )}
                    renderCode={(props) => (
                        <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded-sm">
                            {props.children}
                        </code>
                    )}
                    renderLink={(props) => (
                        <a
                            href={props.href}
                            target={props.target}
                            rel={props.rel}
                            className="text-sky-500 hover:text-sky-600 transition-colors"
                        >
                            {props.children}
                        </a>
                    )}
                />
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
                max: 100,
                step: 5

            }
        },
        highlightTextEditProps
    ],
}

export default HomeHeader

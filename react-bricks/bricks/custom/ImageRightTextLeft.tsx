import { Image, RichText, Text, types } from 'react-bricks/rsc'
import TypographyRichTextExt from "@/react-bricks/components/TypographyRichTextExt";

interface ImageRightTextLeftProps {
    image: types.IImageSource
    title: types.TextValue
    description: types.TextValue
    imageWidth: number
    textWidth: number
    background: {
        color: string
        className: string
    }
}

const ImageRightTextLeft: types.Brick<ImageRightTextLeftProps> = ({
                                                                      image,
                                                                      title,
                                                                      description,
                                                                      imageWidth,
                                                                      textWidth,
                                                                      background,
                                                                  }) => {
    return (
        <section className={`w-full ${background.className}`}>
            <div className="flex items-center justify-between gap-12 px-16 py-20">
                <div
                    className="flex flex-col justify-center"
                    style={{ width: `${textWidth}px` }}
                >
                    <TypographyRichTextExt
                        propName="title"
                        value={title}
                        placeholder="Write the title..."
                    />

                    <TypographyRichTextExt
                        propName="description"
                        value={description}
                        placeholder="Write the description..."
                    />
                </div>

                <div style={{ width: `${imageWidth}px` }} className="shrink-0">
                    <Image
                        propName="image"
                        source={image}
                        alt=""
                        maxWidth={2000}
                        imageStyle={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

ImageRightTextLeft.schema = {
    name: 'ImageRightTextLeft',
    label: 'Image Right Text Left',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({
        imageWidth: 500,
        textWidth: 500,
        background: { color: '#ffffff', className: 'bg-white' },
        title: 'Your title',
        description: [
            {
                type: 'p',
                children: [{ text: 'Your description goes here.' }],
            },
        ],
    }),
    sideEditProps: [
        {
            name: 'background',
            label: 'Background',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Color,
                options: [
                    {
                        label: 'White',
                        value: { color: '#ffffff', className: 'bg-white' },
                    },
                    {
                        label: 'Light Gray',
                        value: { color: '#f3f4f6', className: 'bg-gray-100' },
                    },
                    {
                        label: 'Gray',
                        value: { color: '#e5e7eb', className: 'bg-gray-200' },
                    },
                    {
                        label: 'Black',
                        value: { color: '#000000', className: 'bg-black' },
                    },
                ],
            },
        },
        {
            name: 'imageWidth',
            label: 'Image Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 100,
                max: 1200,
                step: 10,
            },
        },
        {
            name: 'textWidth',
            label: 'Text Width',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 100,
                max: 1200,
                step: 10,
            },
        },
    ],
}

export default ImageRightTextLeft
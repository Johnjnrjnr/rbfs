import { Image, types } from 'react-bricks/rsc'
import TypographyRichTextExt from '@/react-bricks/components/TypographyRichTextExt'

export interface VerticalImageProps {
    image: types.IImageSource
    rounded: boolean
    picAspectRatio: number
    pictureWidth: number
    buttonLinkText: string
    kicker: string
    title: string
}

const VerticalImage: types.Brick<VerticalImageProps> = ({
                                                            image,
                                                            rounded,
                                                            picAspectRatio,
                                                            pictureWidth,
                                                            buttonLinkText,
                                                            kicker,
                                                            title,
                                                        }) => {
    return (
        <span className="verticalImage min-w-[var(--box-width)] justify-between" style={{"--box-width": pictureWidth + "px"} as React.CSSProperties}>
      <div className="verticalImageContent">
        <div className="md:ml-[36px] double-space-top">
          <TypographyRichTextExt
              propName="kicker"
              value={kicker}
              placeholder="Kicker.."
          />
        </div>

        <div className="md:ml-[36px] mr-[36px] mt-[9px]">
          <TypographyRichTextExt
              propName="title"
              value={title}
              placeholder="Title..."
          />
        </div>

        <div className="rounded-full md:w-[155px] bg-[#0400FF] md:ml-[36px] mr-[36px] pt-[9px] pb-[9px] px-1 py-1 double-space-bottom single-space-top text-white align-middle">
          <TypographyRichTextExt
              propName="buttonLinkText"
              value={buttonLinkText}
              placeholder="Button link text"
          />
        </div>
      </div>

      <div
          className="verticalImageFrame"
          style={
              {
                  '--vi-width': `100%`,
                  '--vi-ratio': `${picAspectRatio}`,
                  '--vi-radius': rounded ? '10px' : '0px',
              } as React.CSSProperties
          }
      >
        <Image
            propName="image"
            alt="Image"
            source={image}
            maxWidth={1600}
            imageStyle={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 'var(--vi-radius)',
                display: 'block',
            }}
        />
      </div>
    </span>
    )
}

VerticalImage.schema = {
    name: 'VerticalImage',
    label: 'VerticalImage',
    previewImageUrl: `/bricks-preview-images/pokemon.png`,
    hideFromAddMenu: true,
    getDefaultProps: () => ({
        picAspectRatio: 1,
        pictureWidth: 400,
        rounded: true,
    }),
    sideEditProps: [
        {
            name: 'picAspectRatio',
            label: 'Aspect Ratio',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Select,
                options: [
                    {
                        label: 'Vertical',
                        value: 0.75,
                    },
                    {
                        label: 'Square',
                        value: 1,
                    },
                    {
                        label: 'Horizontal',
                        value: 4 / 3,
                    },
                ],
            },
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
                min: 10,
            },
        },
    ],
}

export default VerticalImage
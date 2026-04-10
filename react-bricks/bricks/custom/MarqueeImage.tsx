import { Image, types } from 'react-bricks/rsc'

export interface MarqueeImageProps {
    image: types.IImageSource
}

const MarqueeImage: types.Brick<MarqueeImageProps> = ({ image, ...rest }) => {
    return (
        <div {...rest} className="rounded-lg border border-dashed border-gray-300 p-2">
            <Image
                propName="image"
                source={image}
                alt=""
                maxWidth={1200}
                imageStyle={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '12px',
                }}
            />
        </div>
    )
}

MarqueeImage.schema = {
    name: 'marquee-image',
    label: 'Marquee Image',
    hideFromAddMenu: true,
    getDefaultProps: () => ({}),
}

export default MarqueeImage
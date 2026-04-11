import {File, types} from 'react-bricks/rsc'
import {backgroundColorsEditProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import SideEditPropType = types.SideEditPropType;

interface FullPageVideoProps {
    video: types.IFileSource
    backgroundColor: {color: string, className: string}
    padding: number
    rounded: boolean
}

const FullPageVideo: types.Brick<FullPageVideoProps> = ({ video, backgroundColor, padding, rounded }) => {
    return (
        <section className={"relative overflow-hidden " + backgroundColor?.className}
        >
            <div
                style={{margin: padding + "px"}}>
            <File
                propName="video"
                source={video}
                allowedExtensions={['.mp4']}
                renderBlock={(file) =>
                    file ? (
                        <video
                            src={file.url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={false}
                            className={rounded ? "rounded" : ""}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            No video uploaded yet.
                        </div>
                    )
                }
            />
            </div>
        </section>
    )
}

FullPageVideo.schema = {
    name: 'FullPageVideo',
    label: 'Full Page Video',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({}),
    sideEditProps: [
        backgroundColorsEditProps,
        {
            name: "padding",
            label: "Padding",
            type: SideEditPropType.Number,
            rangeOptions: {
                step: 15,
            }
        },
        {
          name: "rounded",
          label: "Rounded Corners",
          type: SideEditPropType.Boolean
        }
    ]
}

export default FullPageVideo
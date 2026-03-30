import { File, types } from 'react-bricks/rsc'

interface FullPageVideoProps {
    video: types.IFileSource
}

const FullPageVideo: types.Brick<FullPageVideoProps> = ({ video }) => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
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
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            No video uploaded yet.
                        </div>
                    )
                }
            />
        </section>
    )
}

FullPageVideo.schema = {
    name: 'FullPageVideo',
    label: 'Full Page Video',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({}),
}

export default FullPageVideo
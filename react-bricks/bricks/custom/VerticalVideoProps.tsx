import { File, Text, types, wrapClientComponent } from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import VerticalVideoClient from './VerticalVideoClient'

export interface VerticalVideoProps {
    video: types.IFileSource
    title: string
    text: string
}

const schema: types.IBlockType<VerticalVideoProps> = {
    name: 'VerticalVideo',
    label: 'VerticalVideo',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    hideFromAddMenu: true,
    getDefaultProps: () => ({
    }),
    sideEditProps: [
    ],
}

const VerticalVideo = wrapClientComponent<VerticalVideoProps>({
    ClientComponent: ({ video, title, text }) => (
        <div className="block">
            <File
                propName="video"
                source={video}
                allowedExtensions={['.mp4']}
                renderBlock={(file) => (
                    <VerticalVideoClient
                        videoUrl={file?.url}
                        title={title}
                        text={text}
                    />
                )}
            />
        </div>
    ),
    RegisterComponent,
    schema,
})

export default VerticalVideo
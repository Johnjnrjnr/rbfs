import { File, types, wrapClientComponent } from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import FullPageVideoScrollClient, {
    FullPageVideoScrollProps,
} from './FullPageVideoScrollClient'

interface FullPageVideoScrollBrickProps extends FullPageVideoScrollProps {
    video: types.IFileSource
    zoomOnScroll?: boolean
    fadeOnScroll?: boolean
    scrollSpeed?: number
    smoothness?: number
}

const schema: types.IBlockType<FullPageVideoScrollBrickProps> = {
    name: 'FullPageVideoScroll',
    label: 'Full Page Video Scroll',
    previewImageUrl: '/bricks-preview-images/pokemon.png',
    getDefaultProps: () => ({
        overlayOpacity: 0.2,
        zoomOnScroll: true,
        fadeOnScroll: true,
        scrollSpeed: 100,
        smoothness: 0.08,
    }),
    sideEditProps: [
        {
            name: 'overlayOpacity',
            label: 'Overlay Opacity',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0,
                max: 1,
                step: 0.05,
            },
        },
        {
            name: 'zoomOnScroll',
            label: 'Zoom On Scroll',
            type: types.SideEditPropType.Boolean,
        },
        {
            name: 'fadeOnScroll',
            label: 'Fade On Scroll',
            type: types.SideEditPropType.Boolean,
        },
        {
            name: 'scrollSpeed',
            label: 'Scroll Speed',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 40,
                max: 200,
                step: 5,
            },
        },
        {
            name: 'smoothness',
            label: 'Smoothness',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 0.02,
                max: 0.3,
                step: 0.01,
            },
        },
    ],
}

export default wrapClientComponent<FullPageVideoScrollBrickProps>({
    ClientComponent: ({
                          video,
                          overlayOpacity,
                          zoomOnScroll,
                          fadeOnScroll,
        scrollSpeed,
        smoothness
                      }) => (
        <File
            propName="video"
            source={video}
            allowedExtensions={['.mp4']}
            renderBlock={(file) => (
                <FullPageVideoScrollClient
                    videoUrl={file?.url}
                    overlayOpacity={overlayOpacity}
                    zoomOnScroll={zoomOnScroll}
                    fadeOnScroll={fadeOnScroll}
                    scrollSpeed = {scrollSpeed}
                    smoothness={smoothness}
                />
            )}
        />
    ),
    RegisterComponent,
    schema,
})
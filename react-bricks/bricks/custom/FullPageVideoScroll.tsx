import { File, types, wrapClientComponent } from 'react-bricks/rsc'
import { RegisterComponent } from 'react-bricks/rsc/client'
import FullPageVideoScrollClient, {
    FullPageVideoScrollProps,
} from './FullPageVideoScrollClient'
import React from "react";

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
        scrollSpeed: 100,
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
            name: 'scrollSpeed',
            label: 'Scroll Speed',
            type: types.SideEditPropType.Number,
            rangeOptions: {
                min: 40,
                max: 200,
                step: 5,
            },
        },
    ],
}

export default wrapClientComponent<FullPageVideoScrollBrickProps>({
    ClientComponent: ({
                          video,
                          overlayOpacity,
        scrollSpeed,
        smoothness
                      }) => (
                          <div className="">

                              <File
                                  propName="video"
                                  source={video}
                                  allowedExtensions={['.mp4']}
                                  renderBlock={(file) =>
                                      file ? (
                                          <FullPageVideoScrollClient
                                              videoUrl={video?.url}
                                              overlayOpacity={overlayOpacity}
                                              scrollSpeed = {scrollSpeed}
                                          />
                                      ) : (
                                          <div className="absolute inset-0 flex items-center justify-center text-white">
                                              No video uploaded yet.
                                          </div>
                                      )
                                  }
                              />
                          </div>
    ),
    RegisterComponent,
    schema,
})
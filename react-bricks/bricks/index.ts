import { types } from 'react-bricks/rsc'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
// import RegisterBrick from './custom/RegisterBrick/RegisterBrick'
import reactBricksUITheme from './react-bricks-ui'
import HomeHeader from "@/react-bricks/bricks/custom/HomeHeader";
import ScrollingPhotosDescriptionProp from "@/react-bricks/bricks/custom/ScrollingPhotosDescriptionProp";
import VerticalImage from "@/react-bricks/bricks/custom/VerticalImageProps";
import PictureIconArrayProp from "@/react-bricks/bricks/custom/PictureIconArray";
import IconDisplay from "@/react-bricks/bricks/custom/IconDisplay";
import VerticalVideo from "@/react-bricks/bricks/custom/VerticalVideoProps";
import VerticalVideoClient from "@/react-bricks/bricks/custom/VerticalVideoClient";

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon, HomeHeader, ScrollingPhotosDescriptionProp, VerticalImage, VerticalVideo, PictureIconArrayProp, IconDisplay], // Custom Bricks
      },
    ],
  },
]

// const bricks = [HeroUnit]

export default bricks

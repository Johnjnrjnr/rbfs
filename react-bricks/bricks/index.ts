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
import FullPageVideo from "@/react-bricks/bricks/custom/FullPageVideo";
import FullPageVideoScroll from "@/react-bricks/bricks/custom/FullPageVideoScroll";
import ImageRightTextLeft from "@/react-bricks/bricks/custom/ImageRightTextLeft";
import StickyTitleWithContent from "@/react-bricks/bricks/custom/StickyTitleWithContent";
import ScrollCard from "@/react-bricks/bricks/custom/ScrollCard";
import HorizontalCards from "@/react-bricks/bricks/custom/HorizontalCards";
import ScrollingPicturesMarquee from "@/react-bricks/bricks/custom/ScrollingPicturesMarquee";
import MarqueeImage from "@/react-bricks/bricks/custom/MarqueeImage";
import ScrollVideoCard from "@/react-bricks/bricks/custom/ScrollVideoCard";
import scrollProjectsCard from "@/react-bricks/bricks/custom/ScrollProjectsCard";
import Header from "@/react-bricks/bricks/custom/header";
import StickyContactForm from "@/react-bricks/bricks/custom/StickyContactForm";
import ContactFormOption from "@/react-bricks/bricks/custom/ContactFormOption";
import ContactFormGroup from "@/react-bricks/bricks/custom/ContactFormGroup";
import ContactFormTextPair from "@/react-bricks/bricks/custom/ContactFormTextPair";
import ContactFormTextarea from "@/react-bricks/bricks/custom/ContactFormTextarea";
import CardGrid from "@/react-bricks/bricks/custom/CardGrid";
import PictureSection from "@/react-bricks/bricks/custom/PictureSection";

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon, HomeHeader, ScrollingPhotosDescriptionProp, VerticalImage, VerticalVideo, PictureIconArrayProp, IconDisplay, FullPageVideo, FullPageVideoScroll, ImageRightTextLeft, StickyTitleWithContent, ScrollCard, ScrollVideoCard, scrollProjectsCard, HorizontalCards, ScrollingPicturesMarquee, MarqueeImage,StickyContactForm, ContactFormOption,ContactFormGroup, ContactFormTextPair, ContactFormTextarea, Header, CardGrid, PictureSection],
      },
    ],
  },
]

// const bricks = [HeroUnit]

export default bricks

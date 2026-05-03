import React from 'react'
import { Text, Link, Image, types } from 'react-bricks/rsc'
import {LayoutProps} from "@/react-bricks/bricks/react-bricks-ui/LayoutSideProps";
import HeaderProvider from '../react-bricks-ui/layout/HeaderProvider';



interface HeaderProps extends LayoutProps{
   label1: string
    label2: string
    label3: string
    ctaText: string
    avatar: types.IImageSource
}

const Header: types.Brick<HeaderProps> = ({label1, label2, label3, ctaText, avatar}) => {
    return (
        <HeaderProvider>
        <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-6">
            <div className="flex items-center justify-between w-full start-margin end-margin h-[50px] px-8 rounded-full bg-black/50 shadow-2xl">

                {/* LOGO SECTION */}
                <div className="flex flex-col leading-none text-white">
                    <div className="header-3 italic ml-[70px] ">sprung</div>
                    <div className="header-3 italic -mt-4">funken</div>
                </div>

                {/* NAVIGATION LINKS */}
                    <Link href="/Webauftritte" className="text-white hover:opacity-70 transition-opacity">
                        <Text propName="label1" value={label1} placeholder="Link 1" />
                    </Link>
                    <Link href="/Webauftritte" className="text-white hover:opacity-70 transition-opacity">
                        <Text propName="label2" value={label2} placeholder="Link 2" />
                    </Link>
                    <Link href="/Webauftritte" className="text-white hover:opacity-70 transition-opacity">
                        <Text propName="label3" value={label3} placeholder="Link 3" />
                    </Link>

                {/* CTA BUTTON + AVATAR */}
                <Link href="google.com" className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white pl-6 pr-1 py-1 rounded-full transition-all shadow-lg">
                    <Text propName="ctaText" value={ctaText} placeholder="Kostenloses Erstgespräch..." />
                    <div className="ml-4 w-12 h-[30px] rounded-full border-2 border-white/20 overflow-hidden bg-gray-200">
                        <Image
                            propName="avatar"
                            alt="Avatar"
                            source={avatar}
                            imageClassName="w-full h-full object-cover"
                        />
                    </div>
                </Link>

            </div>
        </div>
        </HeaderProvider>
    )
}

Header.schema = {
    name: 'custom-header',
    label: 'header',
    category: 'Layout',
    tags: ['header', 'menu'],
    getDefaultProps: () => ({
        label1: 'Film und Fotografie',
        label2: 'Webauftritte',
        label3: 'Social Media',
        ctaText: 'Kostenloses Erstgespräch mit Alex',
        avatar: {
            src: 'https://images.reactbricks.com/placeholder.svg',
            width: 100,
            height: 100,
        },
    }),
}

export default Header
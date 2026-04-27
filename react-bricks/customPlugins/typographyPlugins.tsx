import React from 'react'
import {
    blockPluginConstructor,
    markPluginConstructor,
    plugins,
} from 'react-bricks/rsc'
import {
    MdFilter1,
    MdFilter2,
    MdFilter3,
    MdFilter4,
    MdLooksOne,
    MdLooksTwo,
    MdLooks3,
    MdLooks4,
    MdTextFields,
    MdShortText,
    MdCircle,
    MdFormatAlignLeft,
    MdFormatAlignCenter,
    MdFormatAlignRight,
} from 'react-icons/md'

const display1 = blockPluginConstructor({
    name: 'display-1',
    label: 'Display 1',
    render: (props: any) => (
        <div {...props.attributes} className="display-1">
            {props.children}
        </div>
    ),
    icon: <MdFilter1 />,
})

const display2 = blockPluginConstructor({
    name: 'display-2',
    label: 'Display 2',
    render: (props: any) => (
        <div {...props.attributes} className="display-2">
            {props.children}
        </div>
    ),
    icon: <MdFilter2 />,
})

const display3 = blockPluginConstructor({
    name: 'display-3',
    label: 'Display 3',
    render: (props: any) => (
        <div {...props.attributes} className="display-3">
            {props.children}
        </div>
    ),
    icon: <MdFilter3 />,
})

const display4 = blockPluginConstructor({
    name: 'display-4',
    label: 'Display 4',
    render: (props: any) => (
        <div {...props.attributes} className="display-4">
            {props.children}
        </div>
    ),
    icon: <MdFilter4 />,
})


const header1 = blockPluginConstructor({
    name: 'header-1',
    label: 'Header 1',
    render: (props: any) => (
        <div {...props.attributes} className="header-1">
            {props.children}
        </div>
    ),
    icon: <MdLooksOne />,
})

const header2 = blockPluginConstructor({
    name: 'header-2',
    label: 'Header 2',
    render: (props: any) => (
        <div {...props.attributes} className="header-2">
            {props.children}
        </div>
    ),
    icon: <MdLooksTwo />,
})

const header3 = blockPluginConstructor({
    name: 'header-3',
    label: 'Header 3',
    render: (props: any) => (
        <div {...props.attributes} className="header-3">
            {props.children}
        </div>
    ),
    icon: <MdLooks3 />,
})

const header4 = blockPluginConstructor({
    name: 'header-4',
    label: 'Header 4',
    render: (props: any) => (
        <div {...props.attributes} className="header-4">
            {props.children}
        </div>
    ),
    icon: <MdLooks4 />,
})

const text1 = blockPluginConstructor({
    name: 'text-1',
    label: 'Text 1',
    render: (props: any) => (
        <p {...props.attributes} className="text-1">
            {props.children}
        </p>
    ),
    icon: <MdTextFields />,
})

const text2 = blockPluginConstructor({
    name: 'text-2',
    label: 'Text 2',
    render: (props: any) => (
        <p {...props.attributes} className="text-2">
            {props.children}
        </p>
    ),
    icon: <MdShortText />,
})

const colorBlack = markPluginConstructor({
    name: 'color-black',
    label: 'Black',
    render: (props: any) => (
        <span {...props.attributes} className="text-black-custom">
      {props.children}
    </span>
    ),
    icon: <MdCircle />,
})

const colorGrey = markPluginConstructor({
    name: 'color-grey',
    label: 'Grey',
    render: (props: any) => (
        <span {...props.attributes} className="text-gray-500">
      {props.children}
    </span>
    ),
    icon: <MdCircle />,
})

const colorWhite = markPluginConstructor({
    name: 'color-white',
    label: 'White',
    render: (props: any) => (
        <span {...props.attributes} className="text-white">
      {props.children}
    </span>
    ),
    icon: <MdCircle />,
})

const colorGreen = markPluginConstructor({
    name: 'color-green',
    label: 'Green',
    render: (props: any) => (
        <span {...props.attributes} className="text-green-500">
      {props.children}
    </span>
    ),
    icon: <MdCircle />,
})

const alignLeft = blockPluginConstructor({
    name: 'align-left',
    label: 'Align Left',
    render: (props: any) => (
        <div {...props.attributes} className="text-left-custom">
            {props.children}
        </div>
    ),
    icon: <MdFormatAlignLeft />,
})

const alignCenter = blockPluginConstructor({
    name: 'align-center',
    label: 'Align Center',
    render: (props: any) => (
        <div {...props.attributes} className="text-center-custom">
            {props.children}
        </div>
    ),
    icon: <MdFormatAlignCenter />,
})

const alignRight = blockPluginConstructor({
    name: 'align-right',
    label: 'Align Right',
    render: (props: any) => (
        <div {...props.attributes} className="text-right-custom">
            {props.children}
        </div>
    ),
    icon: <MdFormatAlignRight />,
})

export const typographyPlugins = [
    plugins.bold,
    plugins.italic,
    plugins.link,

    display1,
    display2,
    display3,
    display4,
    header1,
    header2,
    header3,
    header4,
    text1,
    text2,

    alignLeft,
    alignCenter,
    alignRight,

    colorBlack,
    colorGrey,
    colorWhite,
    colorGreen,
]
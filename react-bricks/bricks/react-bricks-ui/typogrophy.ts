import { types } from 'react-bricks/rsc'

export const typographyOptions = [
    { label: 'Display 1', value: 'display-1' },
    { label: 'Display 2', value: 'display-2' },
    { label: 'Display 3', value: 'display-3' },
    { label: 'Display 4', value: 'display-4' },
    { label: 'Header 1', value: 'header-1' },
    { label: 'Header 2', value: 'header-2' },
    { label: 'Header 3', value: 'header-3' },
    { label: 'Header 4', value: 'header-4' },
    { label: 'Text 1', value: 'text-1' },
    { label: 'Text 2', value: 'text-2' },
]

export const typographySideEditProp = {
    name: 'typography',
    label: 'Typography',
    type: types.SideEditPropType.Select,
    shouldRefreshText: true,
    selectOptions: {
        display: types.OptionsDisplay.Select,
        options: typographyOptions,
    },
}
import React from 'react'
import { RichTextExt, types } from 'react-bricks/rsc'
import { typographyPlugins } from '@/react-bricks/customPlugins/typographyPlugins'

interface TypographyRichTextExtProps {
    propName: string
    value: types.TextValue
    placeholder?: string
}

export default function TypographyRichTextExt({
                                                  propName,
                                                  value,
                                                  placeholder,
                                              }: TypographyRichTextExtProps) {
    return (
        <RichTextExt
            propName={propName}
            value={value}
            placeholder={placeholder}
            renderBlock={({ children }) => <p className="text-1 min-w-[20px] min-h-[10px]">{children}</p>}
            plugins={typographyPlugins}
        />
    )
}
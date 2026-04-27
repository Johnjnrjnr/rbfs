'use client'

import React from 'react'

interface ContactFormTextPairClientProps {
    leftName?: string
    rightName?: string
    leftPlaceholder?: string
    rightPlaceholder?: string
    required?: boolean
}

const inputClassName =
    'w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-neutral-500'

const ContactFormTextPairClient: React.FC<ContactFormTextPairClientProps> = ({
                                                                                 leftName = 'leftField',
                                                                                 rightName = 'rightField',
                                                                                 leftPlaceholder = 'Vorname',
                                                                                 rightPlaceholder = 'Nachname',
                                                                                 required = false,
                                                                             }) => {
    return (
        <div className="w-full">
            <input
                type="text"
                name={leftName}
                placeholder={leftPlaceholder}
                required={required}
                className={inputClassName}
            />
        </div>
    )
}

export default ContactFormTextPairClient
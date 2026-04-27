'use client'

import React from 'react'

interface ContactFormShellProps {
    children: React.ReactNode
}

export default function ContactFormShell({ children }: ContactFormShellProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
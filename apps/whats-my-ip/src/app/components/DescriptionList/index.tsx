import React, { Component } from 'react'

export default function DescriptionList({ children }: { children: React.ReactNode }) {
    return (
        <dl>
            {children}
        </dl>
    )
}


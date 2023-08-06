// app/providers.jsx

'use client'

import { ThemeProvider } from 'next-themes'
import { Component, ReactNode } from 'react'

export default class ColorModeProvider extends Component<{children: ReactNode}> {
    render(): ReactNode {
        return <ThemeProvider attribute="class">{this.props.children}</ThemeProvider>
    }
}
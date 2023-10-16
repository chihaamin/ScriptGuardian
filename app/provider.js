'use client'

import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react';

export default function Providers ({ children, session }) {
    return (
        <NextUIProvider>
            <SessionProvider session={ session }>
                { children }
            </SessionProvider>
        </NextUIProvider>
    )
}
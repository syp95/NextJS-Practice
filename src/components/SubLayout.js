import Link from 'next/link'
import React from 'react'

export default function SubLayout({ children }) {
    return (
        <div>
            <h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
                {children}
            </h1>
        </div>
    )
}

import React from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CartDate() {
    const router = useRouter()
    const { date } = router.query
    return (
        <>
            <h1 className="title">Cart Date {JSON.stringify(date)}</h1>
            <Link href="/cart/2022/06/05">
                <a>2022/06/05</a>
            </Link>
            <br />
            <button
                onClick={() => {
                    router.push('/cart/2022/06/24')
                }}
            >
                06/24
            </button>
        </>
    )
}

CartDate.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    )
}

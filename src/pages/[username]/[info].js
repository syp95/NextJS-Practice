import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function UserNameInfo() {
    const router = useRouter()
    const { username, info, uid } = router.query
    const [name, setName] = useState('?')

    // useEffect(() => {
    //   fetch('/api/user').then((res) => res.json()).then((data) => {setName(data.name)})
    // }, []);

    useEffect(() => {
        if (uid != null) {
            fetch(`/api/user-info/${uid}`)
                .then((res) => res.json())
                .then((data) => {
                    setName(data.name)
                })
        }
    }, [uid])
    return (
        <>
            <h1 className="title">
                {username} {name} {info}
            </h1>
        </>
    )
}

UserNameInfo.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    )
}

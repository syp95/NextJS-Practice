import React from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router';

export default function UserNameInfo() {
  const router = useRouter();
  const { username, info } = router.query;
  return (
    <>
      <h1 className="title">{username} {info}</h1>
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

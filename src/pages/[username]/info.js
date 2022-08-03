import React from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function UserNameInfo() {
  return (
    <>
      <h1 className="title">UserName Info</h1>
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

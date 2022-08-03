import React from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CartDate() {
  return (
    <>
      <h1 className="title">Cart Date</h1>
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

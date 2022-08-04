import React, { useState } from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  console.log('server')
  return {
    props: {  },
  }
}

export default function Info() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;
  return (
    <>
      <h1 className="title">Info</h1>
      <h1 className="title">Clicked : {String(clicked)}</h1>
      <h1 className="title">Status : {status}</h1>
      <br />
      <button onClick={() => {
        alert('edit')
        setClicked(true)
        location.replace('/settings/my/info?status=editing')
      }}>edit(replace)</button>
      <br />
      <button onClick={() => {
        alert('edit')
        setClicked(true)
        router.push('/settings/my/info?status=editing')
      }}>edit(push)</button>
      <br />
      <button onClick={() => {
        alert('edit')
        setClicked(true)
        router.push('/settings/my/info?status=editing', undefined, { shallow: true })
      }}>edit(push shallow)</button>
    </>
  )
}

Info.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}

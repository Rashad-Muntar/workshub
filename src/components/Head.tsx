import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
}
function CustomeHead({title}:Props) {
  return (
    <div>
      <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default CustomeHead

  
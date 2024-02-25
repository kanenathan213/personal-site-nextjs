import Container from '@/components/container'
import Intro from '@/components/intro'
import Detail from '@/components/detail'
import Layout from '@/components/layout'
import Head from 'next/head'
import { useState } from 'react'

export default function Index() {
  const [hasBeenScrolled, setHasBeenScrolled] = useState(false)
  return (
    <>
      <Layout>
        <Head>
          <title>Nathan Kane</title>
        </Head>
        <Container>
          <Intro hasBeenScrolled={hasBeenScrolled} />
          <Detail handleBottomScolledTo={() => setHasBeenScrolled(true)} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }: { preview: any }) {
  return {
    props: {},
  }
}

import Container from 'components/container'
import MoreStories from 'components/more-stories'
import HeroPost from 'components/hero-post'
import Intro from 'components/intro'
import Detail from 'components/detail'
import Layout from 'components/layout'
import { getAllPostsForHome } from 'lib/api'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Nathan Kane</title>
        </Head>
        <Container>
          <Intro />
          <Detail />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  return {
    props: {},
  }
}

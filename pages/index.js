import Head from 'next/head'

import { getGameList } from '../data/gameInfo'

import Intro from '../components/intro'
import GameList from '../components/gamelist'
import Layout, { siteTitle } from '../components/layout'
import Social from '../components/social'

export async function getStaticProps() {
  const gameList = getGameList();
  return { props: { gameList } }
}

export default function Home({gameList}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <Social />
      <Intro />
      <GameList gameList={gameList} />

    </Layout>
  )
}
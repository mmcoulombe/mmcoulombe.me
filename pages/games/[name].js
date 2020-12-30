import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Layout from '../../components/layout';

import  { getGameList, parseMarkdownFile } from '../../data/gameInfo'

export async function getStaticPaths() {
    const game = getGameList();
    const paths = game.map(v => {
        return {
            params: {
                name: v.gameName
            }
        }
    })
    return { paths, fallback: false }
}

export async function parseGameReadMe(gameFolder) {
    const mdFile = `public/games/${gameFolder}/README.md`;
    const result = parseMarkdownFile(mdFile)
    return result
}

export async function getStaticProps({ params }) {
    const gameName = params.name
    const readme = await parseGameReadMe(gameName)

    return {
        props: {
            gameName,
            readme
        }
    }
}

function GameInfoHeaderItem({ children, selected }) {
    let classes = "flex-1 border-b-2 pt-2 pb-2"
    classes += selected ? " text-black border-purple-600" : " border-gray-600"
    return (
        <span className={classes}>
            {children}
        </span>
    )
}

function Breadcrumbs({gameName}) {
    return (
        <div id="breadcrumbs" className="text-center text-gray-400 p-4 font-bold uppercase">
            <ul className="inline bg-white p-3 rounded-full">
                <li className="inline hover:underline">
                    <Link href="/">
                        <a>Go Back to Home</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export function GameInfo({router, gameName, readme}) {
    const gameUrl = `${gameName}/game.html`
    const { query: { tabIndex }} = router

    const isTabOne = tabIndex === '1' || tabIndex == null


    return (
        <Layout>
            <Head>
                <title>{gameName}</title>
            </Head>
            <Breadcrumbs gameName={gameName} />

            <iframe className="mx-auto py-4" width="1024" height="600" src={gameUrl}>

            </iframe>

            <section id="gameInfo" className="text-gray-600 pt-4">
                <div id="info-header" className="flex text-3xl text-center">
                    <GameInfoHeaderItem selected={isTabOne}>
                        <Link href={{ pathname: `/games/${gameName}`, query: { tabIndex: "1" }}} >
                            <a>README</a>
                        </Link>
                    </GameInfoHeaderItem>
                    <GameInfoHeaderItem selected={!isTabOne}>    
                        <Link href={{ pathname: `/games/${gameName}`, query: { tabIndex: "2" }}} >
                            <a>Change Log</a>
                        </Link>
                    </GameInfoHeaderItem>
                </div>
            </section>

            <section className="bg-white pt-4" >
                <div className="container mx-auto px-40">        
                    <div id="markdown-container">
                        {isTabOne && <div className="markdown-content" dangerouslySetInnerHTML={{ __html: readme }} />}
                        {!isTabOne && <div className="markdown-content"><p>No change log available :(</p></div>}
                    </div>
                    
                </div>
            </section>
        </Layout>
    )
}

export default withRouter(GameInfo)
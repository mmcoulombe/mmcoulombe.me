import Tile from './tile'

export default function GameList({gameList}) {
    let list;
    if (gameList.length > 0) {
        list = gameList.map((game, i) => {
            return <Tile key={i} {...game} />
        })
    }
    else {
        list = <h2>Coming Soon ...</h2>
    }
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-center uppercase py-6 text-3xl">Project(s)</h1>
            <div id="game-list">
                {list}
            </div>
        </div>
    )
}

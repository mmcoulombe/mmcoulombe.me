import PlayGame from './playgame'

function getDefaultThumbnail() {
    // "fill:rgb(100,100,100);stroke-width:4;stroke:rgb(50,50,50)"
    return (
        <svg className="mx-auto" width="96" height="96">
            <rect width="96" height="96" />
        </svg>
    )
}

export default function Tile({title, gameName, thumbnail, excerpt}) {
    let imgThubnail;
    if (thumbnail != null)
    {
        imgThubnail = <img src={`img/${thumbnail}`} alt={`${gameName}-icon`} />
    }
    else
    {
        imgThubnail = getDefaultThumbnail();
    }
    return (
        <div id="tile" className="w-auto inline-block rounded-lg border-solid border-2 border-gray-400 bg-white shadow-xs">
            <p className="font-semibold text-lg text-center">{title}</p>
            {/* {imgThubnail} */}
            <p className="text-base text-center leading-5 m-4" >{excerpt}</p>
            <PlayGame gameName={gameName} />
        </div>
    )
}
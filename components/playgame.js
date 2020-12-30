import Link from 'next/link'

export default function PlayGame({gameName}) {
    let url = `/games/${gameName}`;
    return (
        <p className="text-center">
            <Link href={url}>
                <a className="inline-block rounded-md px-5 py-2 bg-green-500 text-white">
                    Play
                </a>
            </Link>
        </p>
    )
}
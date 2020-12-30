import fs from 'fs'

import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

function readFileP(path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err.message)
            }
            else {
                resolve(data)
            }
        })
    })
}

export function getGameList() {
    return [
        {
            title: "Emergency Landing",
            gameName:"emergency-landing",
            thumbnail: null,
            excerpt: "Flappy bird like game"
        }
    ]
}

export async function parseMarkdownFile(path) {
    const fileContent = await readFileP(path, {encoding: 'utf-8'})
    const metaResult = matter(fileContent)
    const processedContent = await remark()
        .use(html)
        .process(metaResult.content)
    const htmlResult = processedContent.toString()
    return htmlResult;
}
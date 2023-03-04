import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import markdownToHtml from "./markdownToHtml";
import QuestionContent from "../interfaces/QuestionContent";

const postsDirectory = join(process.cwd(), '_questions')

type Items = {
    [key: string]: string
}

export function getQuestionSlugs() {
    return fs.readdirSync(postsDirectory)
}

export async function getQuestionBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items: Items = {}

    for(const field of fields){
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }
        if (field === 'formattedContent'){
            items[field] = await markdownToHtml(content || '')
            //items[field] = content
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    }

    return items
}

export async function getAllQuestions(fields: string[] = []) {
    const slugs = getQuestionSlugs()
    let questions:Items[] = []
    //const posts = slugs
    //    .map((slug) => getQuestionBySlug(slug, fields))
        // sort posts by date in descending order
        //.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    for(const slug of slugs){
        console.log("Getting content for slug: " + slug)
        questions.push(await getQuestionBySlug(slug, fields))
    }
    return questions
}
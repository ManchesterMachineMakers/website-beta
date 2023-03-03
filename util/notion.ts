import { NotionAPI } from "notion-client";
import { Block } from "notion-types"

type Post = {
    name: string,
    content: Block,
    slug: string,
    date: Date,
    featured: boolean,
    featuredImage?: string,
    published: boolean,
    category: string,
    description: string,
    image: string,
    authors: string[],
}

export const notionAPI = new NotionAPI({authToken: process.env.NOTION_TOKEN_V2, activeUser: process.env.NOTION_USER_ID})
export const mainDB = notionAPI.getPage(process.env.POSTS_TABLE_ID!);
export async function posts() {
    const db = await mainDB;
    const blocks = Object.values(db.block);
    const schema = Object.values(db.collection).find(c => c.value.name[0][0] == "Blog Pages")!.value.schema;
    const fieldNames = new Map(
        Object.keys(schema).map(key => [key, schema[key].name])
    )
    
}
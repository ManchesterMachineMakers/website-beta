import { NotionAPI } from "notion-client";

export const notionAPI = new NotionAPI({authToken: process.env.NOTION_TOKEN_V2, activeUser: process.env.NOTION_USER_ID})
export const mainDB = notionAPI.getPage(process.env.POSTS_TABLE_ID!);
export async function posts() {
    const db = await mainDB;
    const blocks = Object.values(db.block);
}
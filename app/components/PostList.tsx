import { mainDB } from "@/util/notion"

export default async function PostList() {
    const db = await mainDB;

    return <pre>{/*JSON.stringify(db, null, 2)*/}</pre>
}
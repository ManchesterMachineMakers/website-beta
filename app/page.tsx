import './globals.css'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { mainDB } from '@/util/notion'
import { Suspense } from 'react'
import PostList from './components/PostList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <PostList/>
      </Suspense>
    </main>
  )
}

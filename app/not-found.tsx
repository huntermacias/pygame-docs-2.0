
import { ChevronLeft } from "lucide-react"

import Link from 'next/link'
import { FC } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'PyGame Documentation 2.0 | Page Not Complete',
	description: 'A Better UI for PyGame Documentation',
}

const PageNotFound: FC = () => {
  return (
    <section className='container pt-32 max-w-7xl mx-auto text-center flex flex-col gap-6 items-center text-white'>
      <h1 className="text-4xl text-white">Page in Progress</h1>
      <p>The site you&apos;re searching for does not exist... yet :) </p>
      <Link className="flex flex-row" href='/'>
        <ChevronLeft className='mr-2 h-6 w-6' />
        Back Home
      </Link>
    </section>
  )
}

export default PageNotFound
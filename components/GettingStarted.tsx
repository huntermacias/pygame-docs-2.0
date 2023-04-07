'use client'
import React from 'react'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@radix-ui/react-tabs'
import Code from './Code'
// import { FC } from 'react'
// import SimpleBar from 'simplebar-react'

const GettingStarted = ({code}) => {
  return (
	<div className="bg-gray-800 rounded-md p-2 mb-4 max-w-5xl w-full">

		<Tabs defaultValue='gettingstarted' className='text-white'>
		<TabsList>
		<TabsTrigger value='gettingstarted'>Getting Started</TabsTrigger>
		</TabsList>
		<TabsContent value='gettingstarted'>
			<div className=''>
				<Code animated code={code} language='python' show />
			</div>
		</TabsContent>
		
	</Tabs>
	</div>
  )
}

export default GettingStarted
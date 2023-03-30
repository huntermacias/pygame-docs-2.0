'use client'
import React from 'react'
import { gettingstart } from './../helpers/documentation-code'
import { FC } from 'react'
// import SimpleBar from 'simplebar-react'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@radix-ui/react-tabs'
import Code from './Code'

const GettingStarted = () => {
  return (
	<div className="bg-gray-800 rounded-md p-4 mb-4">

		<Tabs defaultValue='gettingstarted' className=''>
		<TabsList>
		<TabsTrigger value='gettingstarted'>Getting Started</TabsTrigger>
		</TabsList>
		<TabsContent value='gettingstarted'>
			<div className=''>
				<Code animated code={gettingstart} language='python' show />

			</div>
		
		</TabsContent>
		
	</Tabs>
	</div>
  )
}

export default GettingStarted
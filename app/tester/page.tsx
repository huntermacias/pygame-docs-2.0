'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import TextBox from '../../components/TextBox';
import Link from 'next/link';
import DocLayout from '../../components/DocLayout';
import { 
	surfaceData, 
	surfaceDescription,
	mixerData,
	mixerDescription
} 
	
from "./data"



const TesterPage = () => {

  return (
	<div>
		{/* <Link href="/surface"  >
			<p className='text-white'>Surface</p>
			<DocLayout title="title" baseDescription="b-description" data={surfaceData} description={surfaceDescription} />
		</Link> */}

		<Link href="/mixer"  >
			{/* <p className='text-white'>Surface</p> */}
			<DocLayout title="title" baseDescription="b-description" data={mixerData} description={	mixerDescription} />

		</Link>

	</div>
    
	

  );
};

export default TesterPage;

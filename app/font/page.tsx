'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import TextBox from '../../components/TextBox';
import { examples } from "./docs"

const FontPage = () => {

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for pygame.Mouse</h1>
      {examples.map((example) => (
        <Fragment key={example.name}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{example.name}</h2>
		  <div className='text-white text-sm pb-4'>

			  <TextBox title={example.title} description={example.description} />
		  	<GettingStarted code={example.code} />
		  </div>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default FontPage;

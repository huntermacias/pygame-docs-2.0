'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import { examples } from './docs'
import TextBox from '../../components/TextBox';

const TimeExamples = () => {


  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for pygame.Event</h1>
      {examples.map((example) => (
        <Fragment key={example.name}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{example.name}</h2>
		  <div className='text-white text-sm'>
		  	<TextBox title={example.title} description={example.description} />

		  	<GettingStarted code={example.code} />
		  </div>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default TimeExamples;

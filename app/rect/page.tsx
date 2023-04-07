'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import { examples } from "./docs"

const RectExamples = () => {


  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for pygame.Rect</h1>
      {examples.map((example) => (
        <Fragment key={example.name}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{example.name}</h2>
          {/* <pre className="bg-gray-800 text-gray-100 font-mono rounded-md p-4 mb-10">{example.code}</pre> */}
          <GettingStarted code={example.code} />
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default RectExamples;

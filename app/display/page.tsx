'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import TextBox from '../../components/TextBox';
import { data, description } from "./docs"

const FontPage = () => {

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-3xl font-bold font-mono mb-6 text-amber-300">Examples for {description.title}</h1>
      {data.map((data) => (
        <Fragment key={data.title}>
          <h2 className="text-xl font-bold font-mono mb-2 text-amber-300">{data.description}</h2>
          <div className='text-white text-sm pb-4'>

            <TextBox title={data.title} description={data.description} />
            <GettingStarted code={data.codesample} />
          </div>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default FontPage;

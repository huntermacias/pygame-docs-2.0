'use client'
import { Fragment } from 'react';
import GettingStarted from '../../components/GettingStarted';
import TextBox from '../../components/TextBox';
import { data, description } from "./docs"

const KeyPage = () => {

  return (
    <div className="mx-auto max-w-2xl p-6 mb-10">
      <h1 className="text-2xl font-extralight font-mono mb-6 text-amber-300">{description.title}</h1>
      {data.map((data) => (
        <Fragment key={data.title}>
          <div className='text-amber-200 font-mono text-sm pb-4'>

            <TextBox title={data.title} description={data.description} />
            <GettingStarted code={data.codesample} />
          </div>
        </Fragment>
      ))}

	  <div></div>
	
    </div>

  );
};

export default KeyPage;

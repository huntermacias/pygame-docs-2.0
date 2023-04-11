'use client'
import { data, timeDescription } from './docs'
import DocLayout from '../../components/DocLayout';

const TimeExamples = () => {


  return (

    <DocLayout 
      title={timeDescription.title} 
      baseDescription={timeDescription.description} 
      data={data} 
      description={timeDescription} 
    />

  );
};

export default TimeExamples;

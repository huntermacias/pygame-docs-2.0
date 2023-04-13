'use client'
import { maskData, maskDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const TimeExamples = () => {


  return (

    <DocLayout 
      title={maskDescription.title} 
      baseDescription={maskDescription.description} 
      data={maskData} 
      description={maskDescription} 
    />

  );
};

export default TimeExamples;

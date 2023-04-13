'use client'
import { transformData, transformDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const TimeExamples = () => {


  return (

    <DocLayout 
      title={transformDescription.title} 
      baseDescription={transformDescription.description} 
      data={transformData} 
      description={transformDescription} 
    />

  );
};

export default TimeExamples;

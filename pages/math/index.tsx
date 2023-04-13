'use client'
import { mathData, mathDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const TimeExamples = () => {


  return (

    <DocLayout 
      title={mathDescription.title} 
      baseDescription={mathDescription.description} 
      data={mathData} 
      description={mathDescription} 
    />

  );
};

export default TimeExamples;

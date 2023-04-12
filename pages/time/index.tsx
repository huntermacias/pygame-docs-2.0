'use client'
import { timeData, timeDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const TimeExamples = () => {


  return (

    <DocLayout 
      title={timeDescription.title} 
      baseDescription={timeDescription.description} 
      data={timeData} 
      description={timeDescription} 
    />

  );
};

export default TimeExamples;

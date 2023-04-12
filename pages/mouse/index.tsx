'use client'

import { mouseData, mouseDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const MousePage = () => {

  return (
    <DocLayout 
      title={mouseDescription.title} 
      baseDescription={mouseDescription.description} 
      data={mouseData} 
      description={mouseDescription} 
    />

  );
};

export default MousePage;

'use client'

import { displayData, displayDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const DisplayPage = () => {

  return (
    <DocLayout 
      title={displayDescription.title} 
      baseDescription={displayDescription.description} 
      data={displayData} 
      description={displayDescription} 
    />

  );
};

export default DisplayPage;

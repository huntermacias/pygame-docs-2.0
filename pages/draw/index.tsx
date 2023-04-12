'use client'

import { drawData, drawDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const drawPage = () => {

  return (
    <DocLayout 
      title={drawDescription.title} 
      baseDescription={drawDescription.description} 
      data={drawData} 
      description={drawDescription} 
    />

  );
};

export default drawPage;

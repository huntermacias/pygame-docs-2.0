'use client'

import { imageData, imageDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const ImagePage = () => {

  return (
    <DocLayout 
      title={imageDescription.title} 
      baseDescription={imageDescription.description} 
      data={imageData} 
      description={imageDescription} 
    />

  );
};

export default ImagePage;

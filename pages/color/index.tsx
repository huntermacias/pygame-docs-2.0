'use client'

import { colorData, colorDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const ColorPage = () => {

  return (
    <DocLayout 
      title={colorDescription.title} 
      baseDescription={colorDescription.description} 
      data={colorData} 
      description={colorDescription} 
    />

  );
};

export default ColorPage;

'use client'

import { spriteData, spriteDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const RectPage = () => {

  return (
    <DocLayout 
      title={spriteDescription.title} 
      baseDescription={spriteDescription.description} 
      data={spriteData} 
      description={spriteDescription} 
    />

  );
};

export default RectPage;

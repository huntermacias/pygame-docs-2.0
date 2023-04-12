'use client'

import { fontData, fontDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const fontPage = () => {

  return (
    <DocLayout 
      title={fontDescription.title} 
      baseDescription={fontDescription.description} 
      data={fontData} 
      description={fontDescription} 
    />

  );
};

export default fontPage;

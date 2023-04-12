'use client'

import { keyData, keyDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const KeyPage = () => {

  return (
    <DocLayout 
      title={keyDescription.title} 
      baseDescription={keyDescription.description} 
      data={keyData} 
      description={keyDescription} 
    />

  );
};

export default KeyPage;

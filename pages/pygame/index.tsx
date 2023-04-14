'use client'

import { pygameData, pygameDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const PygamePage = () => {

  return (
    <DocLayout 
      title={pygameDescription.title} 
      baseDescription={pygameDescription.description} 
      data={pygameData} 
      description={pygameDescription} 
    />

  );
};

export default PygamePage;

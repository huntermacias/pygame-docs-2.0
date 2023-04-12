'use client'

import { surfaceData, surfaceDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const SurfacePage = () => {

  return (
    <DocLayout 
      title={surfaceDescription.title} 
      baseDescription={surfaceDescription.description} 
      data={surfaceData} 
      description={surfaceDescription} 
    />

  );
};

export default SurfacePage;

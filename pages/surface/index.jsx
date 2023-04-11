'use client'

import { data, description } from "./docs"
import DocLayout from '../../components/DocLayout';

const SurfacePage = () => {

  return (
    <DocLayout 
      title={description.title} 
      baseDescription={description.description} 
      data={data} 
      description={description} 
    />

  );
};

export default SurfacePage;
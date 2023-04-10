'use client'

import { data, description } from "./docs"
import DocLayout from '../../components/DocLayout';

const RectPage = () => {

  return (
    <DocLayout 
      title={description.title} 
      baseDescription={description.description} 
      data={data} 
      description={description} 
    />

  );
};

export default RectPage;

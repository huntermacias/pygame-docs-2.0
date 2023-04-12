'use client'

import { RectData, RectDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const RectPage = () => {

  return (
    <DocLayout 
      title={RectDescription.title} 
      baseDescription={RectDescription.description} 
      data={RectData} 
      description={RectDescription} 
    />

  );
};

export default RectPage;

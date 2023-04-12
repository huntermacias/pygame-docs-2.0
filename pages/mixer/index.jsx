'use client'

import { mixerData, mixerDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const MixerPage = () => {

  return (
    <DocLayout 
      title={mixerDescription.title} 
      baseDescription={mixerDescription.description} 
      data={mixerData} 
      description={mixerDescription} 
    />

  );
};

export default MixerPage;

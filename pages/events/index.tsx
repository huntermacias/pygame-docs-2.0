'use client'

import { eventData, eventDescription } from "./../../documentation/docs"
import DocLayout from '../../components/DocLayout';

const eventPage = () => {

  return (
    <DocLayout 
      title={eventDescription.title} 
      baseDescription={eventDescription.description} 
      data={eventData} 
      description={eventDescription} 
    />

  );
};

export default eventPage;

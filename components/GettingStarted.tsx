'use client'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@radix-ui/react-tabs';
import Code from './Code';

const GettingStarted = ({ code }) => {
  return (
    <div className="bg-gray-800 rounded-md mb-4 max-w-5xl w-full">
      <Tabs defaultValue="gettingstarted" className="text-white">
        <TabsList className="flex space-x-4 border-b-2 border-gray-700 pb-1">
          <TabsTrigger
            value="gettingstarted"
            className="py-3 px-4 font-small font-mono hover:text-gray-200 focus:outline-none focus-visible:underline"
          >
            
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gettingstarted" className="py-4 px-6">
          <div className="">
            <Code animated code={code} language="python" show />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GettingStarted;

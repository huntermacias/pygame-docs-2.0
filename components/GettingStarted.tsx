"use client";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@radix-ui/react-tabs";
import { FiCopy } from "react-icons/fi";
import Code from "./Code";

type Props = { code: string };

const GettingStarted = ({ code }: Props) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-800 rounded-md mb-4 max-w-5xl w-full overflow-x-auto">
      <Tabs defaultValue="gettingstarted" className="text-white">
        <TabsList className="flex space-x-4 border-b-2 border-gray-700 pb-1">
          <TabsTrigger
            value="gettingstarted"
            className="py-3 px-4 font-sm font-mono hover:text-gray-200 focus:outline-none focus-visible:underline"
          >
            <button className="relative top-2 right-2 justify-end p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-600 focus:outline-none focus-visible:ring">
              <FiCopy onClick={handleCopyClick} />
            </button>
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

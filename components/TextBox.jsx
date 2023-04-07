'use client'

const TextBox = ({ title, description }) => {
  return (
    <div className=" rounded-lg pb-4">
 
      <h2 className="text-lg font-bold font-mono text-dark-800 mb-2">{title}</h2>
   
      <p className="text-gray-100 text-lg font- ml-8">{description}</p>
    </div>
  );
};

export default TextBox;

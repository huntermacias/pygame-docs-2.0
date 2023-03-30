'use client'

const TextBox = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

export default TextBox;

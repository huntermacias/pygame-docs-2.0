'use client'
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-5xl mt-28 font-mono">
      <div className="md:flex">
        <div className="w-full px-4 py-5 md:py-10 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 rounded-lg focus:bg-gray-100"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 rounded-lg focus:bg-gray-100"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold">
                Image URL
              </label>
              <input
                type="text"
                value={image}
                onChange={handleImageChange}
                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 rounded-lg focus:bg-gray-100"
                placeholder="Enter the URL of your profile image"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-4 py-3 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div
          className="hidden md:block md:w-1/2"
          style={{
            background: `url('https://media.istockphoto.com/id/1356570463/vector/glowing-neon-line-python-programming-language-icon-isolated-on-brick-wall-background-python.jpg?s=612x612&w=0&k=20&c=HM5nP5_fJM5N0-U3trvgwm7D2iYmfWttAHj72O_MMkk=')`,
            backgroundSize: "contain",
            backgroundPosition: "contain",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUpForm;

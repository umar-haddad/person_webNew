import React from "react";

function contact() {
  return (
    <>
      <div className="py-10 flex w-full min-h-screen justify-center items-center">
        <form
          action=""
          className="w-full px-4 sm:px-20 p-8 bg-pink-50 rounded-lg shadow-md"
        >
          <h2 className="text-center text-1sm tracking-[7.5px] font-medium font-inter">
            Contact Me
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Message :
            </label>
            <textarea
              name=""
              id=""
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="mb-4">
            <button className="flex p-3 border rounded-2xl border-gray-300 hover:border-gray-400 transition-colors duration-300 bg-pink-400 text-gray-900 font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default contact;

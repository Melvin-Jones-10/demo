import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="flex items-center justify-between h-20 text-2xl font-bold font-sans sticky top-0 mr-22 ml-48 
      "
      >
        <div>
          <span className="ml-10 font-bold">MJ</span>
        </div>
        <div className="mr-28">
          <span className=" mr-16">Home</span>
          <span className="mr-16">About</span>
          <span className="mr-16">Projects</span>
          <span className="mr-16">Blogs</span>
        </div>
      </div>

      <div className="text-center font-mono py-36 text-3xl h-screen ">
        <h2 className="font-dancing-script text-5xl">Hi I'm</h2>
        <h1 className="font-dancing-script text-8xl">Melvin Jones</h1>
      </div>
    </>
  );
};

export default Header;

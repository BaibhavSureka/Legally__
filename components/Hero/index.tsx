"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
const Hero = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="custom-screen mt-0 mb-10 py-28 pb-0 bg-#202122 text-gray-600">
          {}
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
              Legally: Your Legal Companion, Always Ready.
            </h1>
            <p className="max-w-xl mx-auto">
            Legally: Your Legal Companion, Always Ready.
            </p>
            <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
              <Button
                className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                onClick={() => {
                  
                }}
              >
                Let's Talk
              </Button>
              <Button
                className="text-gray-700 border hover:bg-gray-50"
                onClick={() => {
              
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

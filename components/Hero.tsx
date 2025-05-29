import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-2">
            Primeiro <span className="text-blue-500">Texto</span>
          </h1>
          <span className="text-lg text-gray-400">
            texto menor embaixo para completar o texto!
          </span>

          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="flex-1 px-5 py-3 outline-none"
            />
            <button className="bg-blue-500 h-12 px-5 flex items-center justify-center">
              <Search className="text-white" />
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex-1">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-blue-500 rounded-full z-0"></div>
          <Image
            src="/image/sofa.png"
            alt="Imagem"
            width={800}
            height={600}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

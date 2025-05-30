import { Armchair } from "lucide-react";
import Image from "next/image";
import React from "react";

const Categorias = () => {
  return (
    <div className="mb-32">
      <div className="flex flex-col justify-center items-center mt-10 mb-14">
        <Armchair className="text-blue-500 bg-white rounded-full w-12 h-10 p-2 shadow-md mb-5" />
        <h1 className="font-bold text-3xl">Categorias</h1>
        <p className="text-gray-500 mt-2">Escolha o melhor</p>
      </div>

      {/* Grid */}
      <div className="flex justify-center gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="bg-blue-400 flex justify-center items-center w-1/2">
              <Image
                src="/image/poltrona.png"
                alt="poltrona"
                width={200}
                height={200}
              />
              <div>
                <p className="text-sm text-blue-700">MELHOR QUALIDADE</p>
                <h1 className="text-2xl font-bold">Acessórios</h1>
                <button className="text-xs text-white bg-orange-500 rounded-lg p-2 shadow-lg mt-10">
                  venha conhecer!
                </button>
              </div>
            </div>
            <div className="bg-lime-400 flex justify-center items-center">
              <Image
                src="/image/cadeira.png"
                alt="poltrona"
                width={200}
                height={200}
              />
              <div className="mr-5">
                <p className="text-sm text-blue-700">MELHOR QUALIDADE</p>
                <h1 className="text-2xl font-bold">Poltronas</h1>
                <button className="text-xs text-white bg-orange-500 rounded-lg p-2 shadow-lg mt-10">
                  venha conhecer!
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-red-300 flex justify-center items-center">
              <Image
                src="/image/tapete.png"
                alt="poltrona"
                width={250}
                height={250}
              />
              <div>
                <p className="text-sm text-blue-700">MELHOR QUALIDADE</p>
                <h1 className="text-2xl font-bold">Tapetes</h1>
                <button className="text-xs text-white bg-orange-500 rounded-lg p-2 shadow-lg mt-10">
                  venha conhecer!
                </button>
              </div>
            </div>
            <div className="bg-yellow-100 flex justify-center items-center  w-1/2">
              <Image
                src="/image/quadro.png"
                alt="poltrona"
                width={250}
                height={250}
              />
              <div>
                <p className="text-sm text-blue-700">MELHOR QUALIDADE</p>
                <h1 className="text-2xl font-bold">Quadros</h1>
                <button className="text-xs text-white bg-orange-500 rounded-lg p-2 shadow-lg mt-10">
                  venha conhecer!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-100 flex justify-center items-center">
          <Image
            src="/image/lustre.png"
            alt="poltrona"
            width={250}
            height={250}
          />
          <div>
            <p className="text-sm text-blue-700">MELHOR QUALIDADE</p>
            <h1 className="text-2xl font-bold">Lustres</h1>
            <button className="text-xs text-white bg-orange-500 rounded-lg p-2 shadow-lg mt-10">
              venha conhecer!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;

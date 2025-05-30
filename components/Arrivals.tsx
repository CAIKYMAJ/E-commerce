import { LayoutDashboard } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { colecoes } from "@/data";
import Image from "next/image";

const Arrivals = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-10 mb-14">
        <LayoutDashboard className="text-blue-500 bg-white rounded-full w-12 h-10 p-2 shadow-md mb-5" />
        <h1 className="font-bold text-3xl">Novas Coleções</h1>
        <p className="text-gray-500 mt-2">
          Perfeitos para decorações e estilos modernos
        </p>
      </div>

      {/* Coleções */}
      <div>
        <div className="flex justify-center">
          <u className="no-underline list-none flex gap-10">
            <li className="text-sm text-gray-600">Todos Catálogos</li>
            <li className="text-sm text-gray-600">Sofá</li>
            <li className="text-sm text-gray-600">Mesa</li>
            <li className="text-sm text-gray-600">Lustres</li>
            <li className="text-sm text-gray-600">Cadeiras</li>
            <li className="text-sm text-gray-600">Portas</li>
            <li className="text-sm text-gray-600">Acessórios</li>
            <li className="text-sm text-gray-600">Camas</li>
          </u>
        </div>
        <Separator className="mt-3 mb-10" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {colecoes.map((item) => (
            <Card
              key={item.id}
              className="border-none shadow-md relative hover:shadow-xl transition bg-white"
            >
              <CardHeader>
                <Image
                  src={item.img}
                  alt="Produto"
                  width={200}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <CardDescription className="text-xs">
                  {item.title}
                </CardDescription>
                <CardTitle className="text-sm">{item.description}</CardTitle>
                <CardTitle className="text-sm text-red-500">
                  {item.price}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrivals;

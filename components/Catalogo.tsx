"use client";

import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { products } from "@/data";
import Header from "./Header";
import Footer from "./Footer";

const Catalogo = () => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex gap-24 mb-20">
          {/* Checkboxs */}
          <div>
            <h1 className="mb-5 text-sm font-bold">Product Categories</h1>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Todos Catálogos
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Sofá
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Mesa
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Lustres
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Cadeiras
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Checkbox className="border-2 border-gray-800 w-5 h-5" />
              Portas
            </div>
            <Separator className="mt-5" />
            {/* Radio Button */}
            <div>
              <h1 className="mb-5 text-sm font-bold mt-5">Sort By</h1>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-4">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                    className="border-2 border-black w-5 h-5"
                  />
                  <h1>More Expensive</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                    className="border-2 border-black w-5 h-5"
                  />
                  <h1>Cheaper</h1>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Produtos */}
          <section className="w-3/4">
            <div className="flex items-center justify-between">
              <h2 className="mb-5 text-sm font-bold">
                Showing 1 - 9 of 15 Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between h-full"
                >
                  <Link href="/visualizar">
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-60 p-12 object-cover mb-4 bg-gray-200"
                    />
                  </Link>
                  {/* Card */}
                  <div className="flex flex-col">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {product.description}
                    </p>
                  </div>
                  {/* Preço */}
                  <div className="flex items-center justify-between">
                    <p className="mt-1">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalogo;

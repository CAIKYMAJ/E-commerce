import {
  ExternalLink,
  LocateIcon,
  LocationEdit,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#020024]">
      <div className="flex justify-between items-start mt-20 mb-10 mx-14">
        <div>
          <Image src="/image/logoBuy.png" alt="logo" width={100} height={100} />
        </div>
        {/* Atalhos */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <ExternalLink className="border border-blue-500 rounded-full w-12 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">Atalhos</h1>
          </div>
          <ul className="flex flex-col gap-2">
            <li className=" hover:text-gray-500 p-3 rounded-lg text-white">
              <Link href="/">Início</Link>
            </li>
            <li className=" hover:text-gray-500 p-3 rounded-lg text-white">
              <Link href="/">Catálogo</Link>
            </li>
            <li className=" hover:text-gray-500 p-3 rounded-lg text-white">
              <Link href="/">Quem Somos</Link>
            </li>
            <li className=" hover:text-gray-500 p-3 rounded-lg text-white">
              <Link href="/">Contato</Link>
            </li>
          </ul>
        </div>
        {/* Sobre */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <LocateIcon className="border border-blue-500 rounded-full w-12 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-white">Sobre Nós</h1>
          </div>
          <h1 className="flex items-center gap-5">
            <LocationEdit className="text-gray-400 " />
            <p className="text-white">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </h1>
          <h1 className="flex items-center gap-5">
            <Phone className="text-blue-500" />
            <p className="text-blue-500">+55 (99) 9 9999-9999</p>
          </h1>
          <h1 className="flex items-center gap-5">
            <Send className="text-blue-500" />
            <p className="text-blue-500">contato@gmail.com</p>
          </h1>
        </div>
      </div>

      <Separator />

      <div className="flex items-center justify-center mb-10 mt-10">
        <h1 className="text-white">Copyright ©2025 All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;

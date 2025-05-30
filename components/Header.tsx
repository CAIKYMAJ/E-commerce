import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex justify-between items-center mx-20">
        <Link href="/">
          <Image
            src="/image/logoBuy.png"
            alt="Imagem"
            width={80}
            height={80}
            className="relative z-10"
          />
        </Link>
        <div>
          <u className="flex list-none gap-5 no-underline">
            <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
              <Link href="/" className="text-xs">
                Início
              </Link>
            </li>
            <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
              <Link href="/catalogo" className="text-xs">
                Catálogo
              </Link>
            </li>
            <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
              <Link href="/quemsou" className="text-xs">
                Quem Somos
              </Link>
            </li>
            <li className="hover:bg-blue-500 hover:text-white p-3 rounded-lg">
              <Link href="/contato" className="text-xs">
                Contato
              </Link>
            </li>
          </u>
        </div>
        <ShoppingCart className="w-7 h-7" />
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import logo from "../assetsLearning/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import '../assetsLearning/header.css';

const Header = () => {
    const [ShowMenu, setShowMenu]= useState(false) /*Valeur par défaut combobox non affiché*/
    const handleShowMenu = ()=>{
        setShowMenu(prevous=>!prevous)
    }
  return (
    <header className="fixed shadow-md w-full px-4 md:px-4 bg-white dark:bg-white-900">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={logo} className="h-full" alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher sur E-Ducate"
              className="rounded-full py-1 px-2 pl-8 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
              <BsSearch className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 ms:gap-6 text-base md:text-lg">
          <div>
          <select className="nav-link">
            <option value="">Catégorie</option>{/*Les valeurs à ajouter*/ }
          </select>
        </div>
            <Link to={"Enseigner"} className="nav-link">
              Enseigner sur <strong>E-Ducate</strong>
            </Link>
            <Link to={"About"} className="nav-link">
              À propos 
            </Link>
          </nav>
          <div className="text-2xl">
           
                    <div class="relative scale-80">
                        <PiShoppingCartBold />
                      <span class="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">4</span>
                   </div>
            </div>
          <div className="" onClick={handleShowMenu}>
          <div className="text-3xl cursor-pointer" >
            <HiOutlineUserCircle/>
          </div>
          {ShowMenu && (
            <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md flex flex-col">{/*flex-col = </br> */}
            <Link to={"Inscription"} className="whitespace-nowrap cursor-pointer">Inscription</Link>
            
            <Link to={"Authentification"}  className="whitespace-nowrap cursor-pointer">Connection</Link>
          </div>
          )}
          
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
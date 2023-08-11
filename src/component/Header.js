import React, { useState } from "react";
import logo from "../assetsLearning/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import '../assetsLearning/header.css';
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice"
import { toast } from "react-hot-toast";
//import logo from '../assetsLearning/bc.png'

const Header = () => {
  const [subCategories, setSubCategories] = useState({
    Développement: ["Web", "Mobile", "Front-end", "Back-end","Game"],
    Langue: ["Anglais", "Français", "Allemand", "Arabe","Espagnole"],
    Business: ["Entrepreneuriat","Finance","Marketing","Gestion de Projet"],
    Informatique:["Réseaux et Sécurité","Systèmes d'Exploitation","Bases de Données","Cloud Computing","DevOps"],
    Marketing :["Marketing Numérique","Marketing sur les Réseaux Sociaux","SEO","Branding"],
    Photographie : [" Photographie Numérique", "Photographie Commerciale", "Photographie de Portrait"],
    Musique : ["Notions de Musique", "Guitare", "Piano"],
 
  });

  const [ShowMenu, setShowMenu] = useState(false) /*Valeur par défaut combobox non affiché*/
  const userData = useSelector((state) => state.user)
  console.log(userData)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleShowMenu = () => {
    setShowMenu(prevous => !prevous)
  }
  const handleLogOut = () => {
    dispatch(logoutRedux())
    toast("Déconnexion avec succés")
    navigate("/");
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
        <div class="flex items-center gap-4 md:gap-7">
  <nav class="flex gap-4 ms:gap-6 text-base md:text-lg">
    <select class="nav-link appearance-none text-right">
      <option value="">Catégorie</option>
      {Object.keys(subCategories).map((categorie, index) => (
        <optgroup label={categorie} key={index}>
          {subCategories[categorie].map((subCategorie, subIndex) => (
            <option value={subCategorie} key={subIndex}>
              {subCategorie}
            </option>
          ))}
        </optgroup>
      ))}
    </select>


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
            <div className="text-3xl cursor-pointer h-8 w-8 rounded-full overflow-hidden " >
              {
                userData.profileImage ? <img src={userData.profileImage} className="h-full w-full" /> : <HiOutlineUserCircle />}
            </div>
            {ShowMenu && (
              <div className="absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md rounded-md flex flex-col justify-center items-center space-y-2">
                <Link to={"Inscription"} className="whitespace-nowrap cursor-pointer bg-gray-500 text-white rounded-lg px-3 py-1 transition duration-300 ">
                  Inscription
                </Link>
                {
                  userData.profileImage ? (
                    <button
                      className="cursor-pointer bg-red-500 text-white rounded-lg px-3 py-1 transition duration-300 hover:bg-red-600"
                      onClick={handleLogOut}
                    >
                      Déconnexion
                    </button>
                  ) : (
                    <Link
                      to={"Authentification"}
                      className="whitespace-nowrap cursor-pointer bg-green-500 text-white rounded-lg px-3 py-1 transition duration-300 hover:bg-green-600"
                    >
                      Connexion
                    </Link>
                  )
                }
              </div>


            )}

          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
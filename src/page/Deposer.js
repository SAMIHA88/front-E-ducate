import React from 'react';
import ScrollToTopOnPageChange from '../utlités/Actualiser';
import { Link } from 'react-router-dom';
import logo from '../assetsLearning/logo.png'
//import logo from '../assetsLearning/bc.png'

const Deposer = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        
        <div className="bg-gradient-to-r from-sky-800 to-slate-900 min-h-screen">
            <ScrollToTopOnPageChange />
            <script src="//unpkg.com/alpinejs" defer></script>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
            </head>
            <style>
                {`
        .font-goldman {
          font-family: 'Goldman', sans-serif;
        }
        `}
            </style>
            <div className="container mx-auto py-12 flex flex-col items-center">
                
                <img
                    src={logo} 
                    alt="Course Image"
                    className="w-32 h-32  mb-4"
                />
                <p className="text-center font-goldman text-4xl mb-8">Formulaire de dépôt des cours</p>

                <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="bg-sky-700 p-4">
                        <p className="text-center text-white font-bold text-3xl ">Informations du formateur</p>
                    </div>
                    <form className="px-6 py-8" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="nomFormateur" className="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nomFormateur"
                                type="text"
                                placeholder="Votre nom"
                                name="nomFormateur"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="prenomFormateur" className="block text-gray-700 text-sm font-bold mb-2">Prénom :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="prenomFormateur"
                                type="text"
                                placeholder="Votre prénom"
                                name="prenomFormateur"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="emailFormateur" className="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="emailFormateur"
                                type="email"
                                placeholder="Votre email"
                                name="emailFormateur"
                                required
                            />
                        </div>
                        
                    </form>
                </div>
                <div className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="bg-sky-700 p-4">
                        <p className="text-center text-white font-bold text-3xl ">Informations du cours</p>
                    </div>
                    <form className="px-6 py-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                            <label htmlFor="nomCous" className="block text-gray-700 text-sm font-bold mb-2">Nom :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nomCours"
                                type="text"
                                placeholder="Nom du cours"
                                name="nomCours"
                                required
                            />
                        </div>
                    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">Type du cours :</label>
    <label className="inline-flex items-center">
        <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="typeCours"
            value="payant"
            required
        />
        <span className="ml-2">Payant</span>
    </label>
    <br />
    <label className="inline-flex items-center">
        <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="typeCours"
            value="gratuit"
            required
        />
        <span className="ml-2">Gratuit</span>
    </label>
</div>

                        <div className="mb-4">
                            <label htmlFor="langue" className="block text-gray-700 text-sm font-bold mb-2">Langue :</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="langue"
                                name="langue"
                                required
                            >
                                <option value="">Sélectionnez une langue</option>
                                <option value="francais">Français</option>
                                <option value="anglais">Anglais</option>
                                <option value="espagnol">Espagnol</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nombreModules" className="block text-gray-700 text-sm font-bold mb-2">Nombre de modules :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombreModules"
                                name="nombreModules"
                                type="number"
                                min="1"
                                placeholder="Nombre de modules"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="niveauCours" className="block text-gray-700 text-sm font-bold mb-2">Niveau du cours :</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="niveauCours"
                                name="niveauCours"
                                required
                            >
                                <option value="">Sélectionnez un niveau</option>
                                <option value="debutant">Débutant</option>
                                <option value="intermediaire">Intermédiaire</option>
                                <option value="avance">Avancé</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="categorie" className="block text-gray-700 text-sm font-bold mb-2">Catégorie :</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categorie"
                                name="categorie"
                                required
                            >
                                <option value="">Sélectionnez une catégorie</option>
                                <option value="informatique">Informatique</option>
                                <option value="langues">Langues</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sousCategorie" className="block text-gray-700 text-sm font-bold mb-2">Sous-catégorie :</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="sousCategorie"
                                name="sousCategorie"
                                required
                            >
                                <option value="">Sélectionnez une sous-catégorie</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description :</label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Description du cours"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="prix" className="block text-gray-700 text-sm font-bold mb-2">Prix :</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="prix"
                                name="prix"
                                type="number"
                                min="1"
                                placeholder="Prix du cours"
                                required
                            />
                        </div>
                        <a
                        
                        className=" flex items-center justify-center mt-6 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors transform hover:scale-110"
                    >
                        Ajouter un module
                    </a>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors transform hover:scale-110"
                    >
                        Déposer
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default Deposer;

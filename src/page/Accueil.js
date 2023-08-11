import React from 'react'

import zakaria from "../assetsLearning/zakaria.png";

import samiha from "../assetsLearning/samiha.jpeg";
import ScrollToTopOnPageChange from '../utlités/Actualiser';
const Accueil = () => {
    return (
        <div>
            <ScrollToTopOnPageChange />
            <script src="//unpkg.com/alpinejs" defer></script>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Goldman&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=DynaPuff&family=Goldman:wght@400;700&family=Lumanosimo&family=Pangolin&family=Rubik+Pixels&family=Titillium+Web:wght@700&display=swap" rel="stylesheet" />
            </head>
            <style>
                {`
        .font-pangolin {
            font-family: 'Pangolin', cursive;
        }
        .font-goldman {
            font-family: 'Goldman', sans-serif;
          }
          .font-edu-sa{
                        font-family: 'DynaPuff', cursive;
                        font-family: 'Edu SA Beginner', cursive;
                        font-family: 'Goldman', cursive;
                        font-family: 'Lugrasimo', cursive;
                        font-family: 'Lumanosimo', cursive;
                        font-family: 'Pangolin', cursive;
                        font-family: 'Rubik Pixels', cursive;
                        font-family: 'Titillium Web', sans-serif;
                    }
        `}
            </style>

            <section class="bg-white ">
                <div class="container mx-auto px-6 py-28">
                    <h1 class="text-2xl font-edu-sa text-gray-800  lg:text-4xl">Une Large Selection De Cours Sur E-Ducate</h1>
                

                </div>
            </section>





        </div>
    )
}
export default Accueil;

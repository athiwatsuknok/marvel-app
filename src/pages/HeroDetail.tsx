import React, { useState } from "react";
import { useHeros } from "../hook/useHeros";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HeroDetail = () => {
  const { heroesName } = useParams(); // Get the 'heroesName' parameter from the URL
  const decodedName = decodeURIComponent(heroesName);
  const { getHerosByName } = useHeros();
  const hero = getHerosByName(decodedName);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  // Use the OR (||) operator to show the loading message if loading is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { img, link, biography } = hero;

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-800 text-white">
      <div className="flex flex-col md:flex-row md:gap-4 lg:w-[calc(70%+1rem)] items-center py-5 px-2 border-dashed border-2 rounded-xl">
        <div className="flex flex-col items-center w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <p className="font-mono font-bold text-2xl lg:text-3xl text-center hover:text-gray-300">
              {decodedName}
            </p>
          </a>
          <img
            src={img}
            className="lg:h-40 md:h-28 object-cover my-3"
            alt={decodedName}
          />
          <p className="font-mono md:text-base lg:text-lg p-3 lg:p-0">
            {biography}
          </p>
          <button
            onClick={() => navigate("/heros")}
            className="bg-red-500 px-6 py-2 mt-4 rounded-md"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;

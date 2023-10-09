import { useHeros } from "../hook/useHeros";
import { HerosItem } from "./HerosItem";
import React, { useState, useEffect } from "react";
import { FC } from "react";

interface Hero {
  hero: string;
}

const HerosList: FC = () => {
  const { loading, heros } = useHeros();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredHeros, setFilteredHeros] = useState<Hero[]>([]);

  // Fetch all heroes when the component mounts
  useEffect(() => {
    setFilteredHeros(heros);
    console.log(filteredHeros);
  }, [heros]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredResults = heros.filter((hero) =>
      hero.hero.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHeros(filteredResults);
  };

  return (
    <div className="bg-gray-800  flex flex-col items-center min-h-screen p-3">
      <h1 className="font-semibold text-white font-mono text-3xl text-center py-4">
        Heros
      </h1>
      <div className="flex gap-2 mb-4 justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a hero..."
          className=" p-2 rounded"
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-500 px-6 py-2  rounded-md text-white"
        >
          Search
        </button>
      </div>
      <div className="flex gap-4 lg:gap-6 flex-wrap justify-center">
        {loading ? (
          <p className="animate-spin h-5 w-5 mr-3 text-white">Loading...</p>
        ) : filteredHeros.length === 0 ? (
          <p className="text-white">No matching hero found</p>
        ) : (
          filteredHeros.map((data, index) => (
            <HerosItem key={index} heros={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default HerosList;

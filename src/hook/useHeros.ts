import { useEffect, useState } from "react";
import { Heros } from "../interface";
import data from "../data/heros.json";

export const useHeros = () => {
  const [heros, setHeros] = useState<Heros[]>([]);
  const [loading, setLoading] = useState(false);

  const getHerosByName = (nameHeros: string) => {
    return heros.find((data) => data.hero === nameHeros) ?? ({} as Heros);
  };

  useEffect(() => {
    setTimeout(() => {
      setHeros(data);
      setLoading(false);
    }, 300);
  }, []);

  return {
    heros,
    loading,
    getHerosByName,
  };
};

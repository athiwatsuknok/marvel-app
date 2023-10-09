import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import { Heros } from "../interface";
import { Navigate } from "react-router";

interface HeroItemPorps {
  herosProps: Heros;
}

export const HerosItem: FC<HeroItemPorps> = ({ heros }) => {
  const navigate = useNavigate();
  const { hero, img } = heros;

  const containerClass =
    "flex items-center gap-3 bg-blue-700 w-40 rounded-md hover:bg-blue-800 cursor-pointer p-3 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300";

  return (
    <div className={containerClass} onClick={() => navigate(`/heros/${hero}`)}>
      <img src={img} className="h-12" alt={hero} loading="lazy" />
      <p className="text-gray-100 overflow-hidden whitespace-nowrap text-ellipsis font-mono text-lg">
        {hero}
      </p>
    </div>
  );
};

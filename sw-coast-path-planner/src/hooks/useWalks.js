import { useEffect, useState } from "react";
import { initialWalks } from "../data/walks";

function useWalks() {
  const [walks, setWalks] = useState(() => {
    const savedWalks = localStorage.getItem("swcp-walks");

    if (savedWalks) {
      return JSON.parse(savedWalks);
    }

    return initialWalks;
  });

  useEffect(() => {
    localStorage.setItem("swcp-walks", JSON.stringify(walks));
  }, [walks]);

  function handleComplete(id) {
    const updatedWalks = walks.map((walk) => {
      if (walk.id === id) {
        return {
          ...walk,
          completed: !walk.completed,
        };
      }

      return walk;
    });

    setWalks(updatedWalks);
  }

  function handleFavorite(id) {
  const updatedWalks = walks.map((walk) => {
    if (walk.id === id) {
      return {
        ...walk,
        favorite: !walk.favorite,
      };
    }

    return walk;
  });

  setWalks(updatedWalks);
}

  return {
    walks,
    handleComplete,
    handleFavorite,
  };
}

export default useWalks;
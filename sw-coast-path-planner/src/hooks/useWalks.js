import { useEffect, useState } from "react";
import { initialWalks } from "../data/walks";

function useWalks() {
const [walks, setWalks] = useState(() => {
  const savedWalks = localStorage.getItem("swcp-walks");

  if (savedWalks) {
    const parsedWalks = JSON.parse(savedWalks);

    return initialWalks.map((initialWalk) => {
      const savedWalk = parsedWalks.find(
        (walk) => walk.id === initialWalk.id
      );

      if (savedWalk) {
        return {
          ...initialWalk,
          ...savedWalk,
          status:
            savedWalk.status ??
            (savedWalk.completed ? "completed" : "todo"),
        };
      }

      return initialWalk;
    });
  }

  return initialWalks;
});
  useEffect(() => {
    localStorage.setItem("swcp-walks", JSON.stringify(walks));
  }, [walks]);

  function handleStatusChange(id, newStatus) {
    const updatedWalks = walks.map((walk) => {
      if (walk.id === id) {
        return {
          ...walk,
          status: newStatus,
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
    handleStatusChange,
    handleFavorite,
  };
}

export default useWalks;
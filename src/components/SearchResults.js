import React from "react";
import "../styles/poke-styles.scss"

import { useSelector, useDispatch } from "react-redux";

function SearchResults() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search.pokemon);
  // console.log("result is: ", result);

  return (
    <div>
      {result.name ? (
        <div>
          <p>Pokemon name: {result.name}</p>
          <img
            src={result.sprites.other["official-artwork"].front_default}
            alt={result.name}
          />
        </div>
      ) : null}
    </div>
  );
}

export default SearchResults;

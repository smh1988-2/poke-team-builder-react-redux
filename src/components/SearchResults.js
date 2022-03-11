import React from "react";
import "../styles/poke-styles.scss";
import { addToTeam } from "../slices/teamSlice";
import { useSelector, useDispatch } from "react-redux";

function SearchResults() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search.pokemon);
  const description = useSelector((state) => state.search.description);

  function handleAddToTeam() {
      dispatch(addToTeam(result))
  }

  return (
    <div>
      {result.name ? (
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={result.sprites.other["official-artwork"].front_default}
              className="card-img-top"
              alt={result.name}
            />
            <div className="card-body">
              <h5 className="card-title">{result.name}</h5>
              <div className="card-text">
                {description.flavor_text_entries
                  ? description.flavor_text_entries[0].flavor_text
                  : null}
                  <br />
                  <ul>
                  {result.types.map((type) => <li>{type.type.name}</li>)}
                  {result.abilities.map((ability) => <li>{ability.ability.name}</li>)}
                  </ul>
                  <button onClick={handleAddToTeam}>Add to team</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchResults;

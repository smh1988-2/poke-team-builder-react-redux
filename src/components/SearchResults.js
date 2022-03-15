import React from "react";
import { addToTeam } from "../slices/teamSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  capitalizeFirstLetter,
  replaceTypeTextWithImage,
} from "../functions/globalFunctions";

function SearchResults() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.search.pokemon);
  const search = useSelector((state) => state.search);
  const description = useSelector((state) => state.search.description);
  const team = useSelector((state) => state.team);

  // console.log("team is ", team);

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          {result.name ? (
            <div>
              <div className="card mx-auto animated animatedFadeInUp fadeInUp" style={{ width: "20rem" }}>
                <h3 className="card-title">
                  {capitalizeFirstLetter(result.name)}
                </h3>
                <img
                  src={result.sprites.other["official-artwork"].front_default}
                  className="card-img-top"
                  alt={result.name}
                />

                {result.types.length > 1 ? (
                  <div className="two-types-row">
                    {result.types.map((type) => (
                      <div className="two-types-column" key={type.type.name}>
                        <img
                          src={replaceTypeTextWithImage(type.type.name)}
                          alt={type.type.name}
                          width="50px"
                          className="two-types-center"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <img
                      src={replaceTypeTextWithImage(result.types[0].type.name)}
                      alt={result.types[0].type.name}
                      width="50px"
                      className="single-type-center"
                    />
                  </div>
                )}

                <div className="card-body text-start">
                  <div className="card-text">
                    {description.flavor_text_entries ? (
                      <p>{description.flavor_text_entries[0].flavor_text}</p>
                    ) : null}

                    <br />
                  </div>
                </div>

                {team.length < 6 ? (
                  <button
                    className="text-center add-to-team"
                    onClick={() => dispatch(addToTeam(result))}
                  >
                    Add to team
                  </button>
                ) : (
                  <button
                    className="text-center add-to-team-disabled"
                    disabled
                    onClick={() => dispatch(addToTeam(result))}
                  >
                    Add to team
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {search.hasErrors ? (
                <p>
                  Sorry, we couldn't find that Pokemon. Try searching again?
                </p>
              ) : null}

              {/* <p>Sorry, we couldn't find that Pokemon. Try searching again?</p> */}
            </>
          )}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SearchResults;

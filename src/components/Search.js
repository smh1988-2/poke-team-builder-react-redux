import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, fetchPokemon } from "../slices/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  function handleSearchSubmit(e) {
    e.preventDefault();
    const searchTerm = e.target[0].value.toLowerCase();
    dispatch(setSearchTerm(searchTerm));
  }

  useEffect(() => {
    dispatch(fetchPokemon(search.searchTerm));
  }, [search.searchTerm]);

  return (
    <div className="container search-bar">
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          <form onSubmit={(e) => handleSearchSubmit(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a pokemon..."
                aria-label="Search for a pokemon..."
                aria-describedby="button-addon2"
              />
              <button className="btn btn-primary" type="submit" id="button-addon2">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Search;

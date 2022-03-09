import React from 'react'
import { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux"
import { setSearchTerm, fetchPokemon, getPokemon, getPokemonSuccess, getPokemonFailure } from "../slices/searchSlice"

function Search() {

    const dispatch = useDispatch();
    const search = useSelector(state => state.search)

    function handleSearchSubmit(e) {
        e.preventDefault();
        const searchTerm = e.target[0].value.toLowerCase();
        dispatch(setSearchTerm(searchTerm))
    }

    useEffect(() => {
        dispatch(fetchPokemon(search.searchTerm))
      }, [search.searchTerm])

  return (
    <div>
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input type="text" placeholder="Search for a Pokemon"></input>
            <button>Search</button>
        </form>
        {/* <p>Search term is: {search.searchTerm}</p> */}
    </div>
  )
}

export default Search
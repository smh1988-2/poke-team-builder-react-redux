import React from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from "react-redux"
import { setSearchTerm, fetchPokemon } from "../slices/searchSlice"

function Search() {

    const dispatch = useDispatch();
    const search = useSelector(state => state.search)

    function handleSearchSubmit(e) {
        // console.log("search clicked ", e)
        e.preventDefault();
        const searchTerm = e.target[0].value.toLowerCase();
        dispatch(setSearchTerm(searchTerm))
    }

    useEffect(() => {
        // console.log("fetching pokemon")
        dispatch(fetchPokemon(search.searchTerm))
      }, [search.searchTerm])

  return (
    <div>
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <input type="text" placeholder="Search for a Pokemon"></input>
            <Button type="submit" variant="primary">Search</Button>
        </form>
    </div>
  )
}

export default Search
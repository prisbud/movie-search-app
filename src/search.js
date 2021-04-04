import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { useState } from 'react';
import MovieCard from './card.js'

function Search() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])



    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submitting")
        //const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=2524606e374a6b3255aadd3dd266d86a&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json()
            setMovies(data.results)
            console.log(data)
        }
        catch (err) {
            console.error(err)
        }


    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="Label" htmlFor="query"> Enter a movie name </label>
                <input type="text" className="query" name="query" placeholder="enter movie name" value={query} onChange={(e) => setQuery(e.target.value)}></input>
                <button className="button" type="submit"> Search </button>
            </form>
            <div className="card-list" >
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                )
                )}

            </div>
        </>
    )
}

export default Search
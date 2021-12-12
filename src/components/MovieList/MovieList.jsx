import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    let thisMoviesGenres = []; 
    // I wasn't able to use "const[name, setName] = useState( null );" form and I'm not sure why. 
    // Am I missing something?

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const getDetails = (movie) => {
        for (let i=0; i<genres.length; i++){
            if(genres[i].id == movie.id){
                console.log(`genres[i].id:`, genres[i].id);
                console.log(`movie.id:`, movie.id);
                thisMoviesGenres.push(genres[i].name);
            }
        }
        dispatch({
            type: `SET_SELECTED_MOVIE`,
            payload: movie
            }
        )
        dispatch({
            type: `SET_SELECTED_MOVIE_GENRES`,
            payload: thisMoviesGenres
        })
        console.log(`thisMoviesGenres:`, thisMoviesGenres);
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link to="/details">
                            <div key={movie.id} onClick={() => getDetails(movie)}>
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title}/>
                            </div>
                        </Link>
                    );
                })}
            </section>    
        </main>
    );
}

export default MovieList;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Details(){
    // const[name, setName] = useState( null );
    const selectedMovie = useSelector(store => store.selectedMovie);
    const selectedMovieGenres = useSelector(store => store.selectedMovieGenres);
    const listItems = selectedMovieGenres.map((genre) =>
        <li>{genre}</li>
    )

    return(
        <div>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster}/>
            <p>{selectedMovie.description}</p>
            <h2>Genres:</h2>
            <ul>{listItems}</ul>
            <Link to="/">
                Go back
            </Link>
        </div>  
    )
}

export default Details;
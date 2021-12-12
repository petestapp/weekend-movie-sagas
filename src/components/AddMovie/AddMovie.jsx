import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function AddMovie(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: 1
    })

    const getTitle = (event) => {
        setNewMovie({...newMovie, title: event.target.value});
    }

    const getPosterURL = (event) => {
        setNewMovie({...newMovie, poster: event.target.value});
    }

    const getDescription = (event) => {
        setNewMovie({...newMovie, description: event.target.value});
    }

    const getGenre = (event) => {
        setNewMovie({...newMovie, genre_id: event.target.value});
    }

    const sendNewMovie = () => {
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovie
        });
    }
    

    return(
        <div>
            <h1>Add A Movie</h1>
            <input type="text" placeholder="Enter Movie Title" onChange={(event)=>getTitle(event)}/>
            <input type="text" placeholder="Enter Movie Poster URL" onChange={(event)=>getPosterURL(event)}/>
            <input type="text" placeholder="Enter Movie Description" onChange={(event)=>getDescription(event)}/>
            <select name="Select Genre" id="genre" onChange={(event)=>getGenre(event)}>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <br/>
            <button onClick={sendNewMovie}>Enter</button>
            <Link to='/'>
                <button>
                    Cancel
                </button>
            </Link>
        </div>
    )
}

export default AddMovie;
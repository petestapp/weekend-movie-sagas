import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        <Link to="/addmovie">Add Movie</Link>
        </Route>
        {/* Details page */}
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="/addmovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;

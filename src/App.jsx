import "./App.css";
import teams from "./data/teams"
import movies from "./data/movies"

function App() {
  return (
    <div className="App">
    <h1>Movie List Section</h1>
      <section className="movie-list-section">
        {
          movies.map((item,index)=>{
            return (
              <div className="movie-card">
                <div className="movie-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="movie-text">
                  <p>Title: {item.title}</p>
                  <p>year: {item.year}</p>
                  <p>runtime: {item.runtime}</p>
                  
                  <p>Genres: {
                    item.genres.map((genre,index)=>{
                      return (
                        <div className="genre">{genre}</div>
                      )
                    })
                  }</p>

                  <p>IMDB Rating: {item.imdbRating}</p>
                  <p>IMDB Votes: {item.imdbVotes}</p>
                </div>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import movies from "./data/movies";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((item) => {
          return (
            <section
              css={css`

                
                padding :20px;
                display : flex;
                flex-direction : row;
                gap:20px;

                width: 400px;
                height: 250px;
                background: white;
                color: black;
                margin: 20px;
              `}
            >
              <div><img src="https://dummyimage.com/102x100/000/fff" alt="" /></div>

              <div css={css`
                display : flex;
                flex-direction : column;
                gap: 10px;

                font-size :16px;
                font-weight: bold;
              
              `}>
                <div>Title:{item.title}</div>
                <div>Year:{item.year}</div>
                <div>Runtime:{item.runtime}</div>

                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                  `}
                >
                  Genres:
                  {item.genres.map((genre) => {
                    return (
                      <div
                        css={css`
                          width: 68px;
                          height: 27px;
                          background: #eaac99;
                          border-radius: 10px;
                          font-size: 12px;
                          text-align: center;
                        `}
                      >
                        {genre}
                      </div>
                    );
                  })}
                </div>
                <div>IMDB Ratings:{item.imdbRating}</div>
                <div>IMDB Votes:{item.imdbVotes}</div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default App;

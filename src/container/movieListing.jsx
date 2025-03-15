import { useState } from "react";
import Button from "../button";
import './style.css'
import MovieCard from "../components/Movie Card/MovieCard";
function MovieListing () {
    const base_img_url = "https://image.tmdb.org/t/p/original" ;
    const [film, setFilms] = useState([]);
    async function getAllMovies () {
        const base_url = "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US" ;
        
        const data = await fetch(base_url);
        const movieLists = await  data.json();
        setFilms(movieLists.results)
    }

    return(
        <div>
            <Button classes={'btn-lists'}btnText = "Fetch Movies" handleClick={getAllMovies}/>
            <div className="films">
                {
                    film.map((ele, ind)=>{
                        return <MovieCard votes={ele.vote_count}
                                rating={ele.vote_average}
                                movieName={ele.title}
                                imgSrc={`${base_img_url}${ele.backdrop_path}`}/>
                    })
                }
            </div>
        </div>
    )
}
export default MovieListing;
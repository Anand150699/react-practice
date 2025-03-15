import React,{useEffect, useState} from 'react'
import MovieCard from '../Movie Card/MovieCard';
import Button from '../../button';
import Input from '../useStateWIthObject/input';
import InputTwoWay from '../Two way Binding/inputTwoWay';
function MovieListingOrder () {
    const base_img_url = "https://image.tmdb.org/t/p/original" ;
    const [film, setFilms] = useState([]);
    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");
    const [hide, setHide] = useState(false)
    const [loading, setLoading] = useState(false)
    async function getAllMovies () {
        setLoading(true)
        const base_url = "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US" ;
        
        const data = await fetch(base_url);
        const movieLists = await  data.json();
        setFilms(movieLists.results)
        setLoading(false)
    }

    useEffect(()=>{
            getAllMovies()
    },[])

    useEffect(()=>{
        sortAlgo(sort)
    },[sort])

    function handleChange(e){
        setSort(e.target.value);
    }

    function sortAlgo (type){
       const sortedFilms = [...film];
        if(type==="ascending"){
            sortedFilms.sort((a,b)=>a.vote_average-b.vote_average)
        }else if (type==="descending"){
            sortedFilms.sort((a,b)=> b.vote_average-a.vote_average)
        }
        setFilms(sortedFilms)
    }

    useEffect(()=>{
        filterFilms(search)
        
    },[search])

    function filterFilms(inp){
        const searchedMovies = film.filter((ele)=>{
            return ele.title.toLowerCase().includes(inp);
        });
       setFilms(searchedMovies)
       
        
    }
    
    function handleInput(val){
        setSearch(val.toLowerCase());
    }

    return(
        <div>
            {/* <input type='text' placeholder='Search Films...' onChange={handleInput} /> */}
            <InputTwoWay 
            value={search}
            searchAction={handleInput}
            type="text" 
            placeholder="Search Films..." />

            <select onChange={handleChange} >
                <option>select</option>
                <option>ascending</option>
                <option>descending</option>
            </select>
            {hide?<p>Search Again</p>:null}
            <div className="films">
                {
                  !loading? film.map((ele, ind)=>{
                        return <MovieCard key={ind} votes={ele.vote_count}
                                rating={ele.vote_average}
                                movieName={ele.title}
                                imgSrc={`${base_img_url}${ele.backdrop_path}`}/>
                    })
                :<h1 style={{color:'gray'}}>Loading.....</h1>}
            </div>
        </div>
    )
}

export default MovieListingOrder;
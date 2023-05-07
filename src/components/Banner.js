import React,{useState,useEffect} from 'react'
import './banner.css'
import { requests } from '../requests'
import { instance } from '../instance'
import Nav from './Nav'
const base_url = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [movies, setMovies] = useState({})
    const fetchData = async () => {
      const response = await instance.get(requests.fetchNetflixOriginals)
      const random = Math.floor(Math.random()*response.data.results.length)
      setMovies(response.data.results[random])
    }

    useEffect(() => {
      fetchData()
    }, [])
    console.log(movies);
  return (
    <div>
        <div className='banner' style={{backgroundImage:`url(${base_url+movies.backdrop_path})`}}>
            <div className='top'>
                <Nav/>
            </div>
            <div className='movie-title'>
            <h1>{movies.original_name}</h1>
            <span className='overview'>{movies.overview }</span>
            </div>
           
            </div>
    </div>
  )
}

export default Banner
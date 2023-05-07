import React, { useEffect, useState } from 'react'
import { instance } from '../instance'
import './Row.css'
const base_url = "https://image.tmdb.org/t/p/original/"
function Rows({ isPoster, title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  const fetchData = async () => {
    const response = await instance.get(fetchUrl)
    setMovies(response.data.results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(movies);
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movie-row'>
        {
          movies.map(movie => (
            <>
              <img className={isPoster ? 'moviePoster' : 'movie'}
                src={base_url + (isPoster ? movie.poster_path : movie.backdrop_path)}
              />
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Rows
//
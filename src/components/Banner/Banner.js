import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/Constants'
import axios from '../../axios'
import { originals } from '../../urls'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(originals).then((response)=>{
            console.log(response.data);
            const movie_num=Math.floor(Math.random()*response.data.results.length);
            setMovie(response.data.results[movie_num])
        })
    }, [])
    
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
                <h1 className='title'>{movie?movie.name:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
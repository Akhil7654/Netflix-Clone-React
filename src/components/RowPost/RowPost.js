import {React,useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/Constants'
import './RowPost.css'
import YouTube from 'react-youtube'


function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,seturlId]=useState('')
    useEffect(() => {
     axios.get(props.url).then(response=>{
        console.log(response.data)
        setMovies(response.data.results)
     })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!=0){
                seturlId(response.data.results[0])
            }else{
                console.log('Trailer not Available')
            }
        })
        .catch(err => console.log(err))
    }

    
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((originalobj)=>
            <img onClick={()=>handleMovie(originalobj.id)} className={props.isSmall?'small_poster':'poster'} src={`${imageUrl+originalobj.backdrop_path}`}
             alt='poster'  title={originalobj.title? originalobj.title : originalobj.name} />   
            
            )}
            
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
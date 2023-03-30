import React, { useEffect, useState } from 'react'
import './Home.scss';
// import endGame from "../../endGame.jpg";
import axios from "axios";
import {Link} from 'react-router-dom';
import {BsPlayFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';

const apiKey="378f8acf1ea8ff585a9dcc2226a876c4";
const url="https://api.themoviedb.org/3";
const upcoming = "upcoming";
const imgUrl="https://image.tmdb.org/t/p/original"
const nowPlaying="now_playing";
const popular="popular";
// const topRated="top_rated";

// This Componenet is for image 
const Card=({img})=>(

  <img className='card' src={img} alt="cover"/>
)



const Row=({title,arr=[]})=>(

  <div className='row'>
    <h2>{title}</h2>

    <div>
   {
    arr.map((item,index)=>(

      <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
    ))
   }
  
    </div>
   
  </div>
);


function Home() {

const[upcomingMovies,setUpcomingMovies]=useState([]);
const[nowPlayingMovies,setnowPlayingingMovies]=useState([]);
const[popularMovies,setPopularMovies]=useState([]);
const[topRatedMovies,setTopRatedMovies]=useState([]);
const[genre,setGenre]=useState([]);
// console.log(genre)

useEffect(()=>{
  const fetchUpcoming=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
    
      setUpcomingMovies(results)
      // console.log(upcomingMovies)
  };
  const fetchNowPlaying=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
    
      setnowPlayingingMovies(results)
      // console.log(upcomingMovies)
  };
  const fetchpopular=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
    
      setPopularMovies(results)
      console.log(results)
  };
  const fetchToprated=async()=>{
      const {data:{results}}=await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`)
    
      setTopRatedMovies(results)
      // console.log(upcomingMovies)
  };
  const fetchAllGenre=async()=>{
      const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
    
      setGenre(genres)
      // console.log(genres);
  };

  fetchUpcoming();
 fetchNowPlaying();
  fetchpopular();
  fetchToprated();
  fetchAllGenre();
})


  return (
   <section className="home">
    <div className="banner" style={{
      backgroundImage:popularMovies[8]? `url(${`${imgUrl}/${popularMovies[7].poster_path}`})`:"none"
    }}>
     
     {
      popularMovies[0]? <h1>{popularMovies[7].original_title}</h1> : <h1>Original Title</h1>
     }
     {
      popularMovies[0]?   <p>{popularMovies[7].overview}</p> :   <p>Overview</p>
     }

<div>
<button><BsPlayFill/>Play</button>
     <button>My List<AiOutlinePlus/></button>
</div>
    
     
   
    </div>

    <Row title={"Upcoming Movies"} arr={upcomingMovies}/>
    <Row title={"Now Playing"} arr={nowPlayingMovies}/>
    <Row title={"Popular Movies"} arr={popularMovies}/>
    <Row title={"Top Rated Movies"} arr={topRatedMovies}/>

    <div className='genreBox'>
      {
        genre.map((item,index)=>(
          
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        
        ))
      }

    </div>
   
   </section>
  )
}

export default Home;
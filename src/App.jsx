import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm,setSearchTerm] = useState('')


  useEffect(()=>{
    async function myFun(){
      const res = await fetch(`https://omdbapi.com/?s=${searchTerm}&apikey=16d7554f`)
      const data = await res.json()
      console.log(data.Search)
      setMovies(data.Search)
    }
    myFun()
  },[searchTerm])

  return (
   <div className='bg-con d-flex flex-column m-3'>
    <h1 className='text-primary'>Movies List</h1>
    <input type="text" className='form-control mb-3' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Enter Movie Title' />
    {
      movies && movies.map((movie)=>{
       // console.log(movie.Title)
        return(
         
           <div className='movie-con d-flex flex-column w-100 shadow-lg'>
            <img src={movie.Poster} alt={movie.Title}/>
            <h2>{movie.Title}</h2>
            <h3>{movie.Year}</h3>
            
            
            
         </div>
        )
      })
    }
   
   </div>
  )
}
export default App

import React, { useState ,useEffect } from 'react';
import Logo from "../slider-3.jpg"
import axios from 'axios'
import { Oval } from  'react-loader-spinner'
import Pagination from './Pagination';

function Movies() {

  const [movies , setMovies]= useState([])
  let [page, setPage] = useState(1);
  const[hover, setHover] = useState('')
  const[favourites, setFavourites] = useState([])
   
    function goAhead()
    {
      setPage(page+ 1);
    }

    function goBack()
    {
      if(page>1)
      setPage(page-1);
    }

    let add = (movie) =>{
       let newArray=[...favourites,movie]
       setFavourites([...newArray])
       localStorage.setItem("imdb", JSON.stringify(newArray))
    }

    let del=(movie) =>{

      let newArray = favourites.filter((m) => m.id != movie.id)
        setFavourites([...newArray])
        localStorage.setItem("imdb", JSON.stringify(newArray))

    }

  useEffect(function(){
   axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${page}`).then((res)=>
    {
       console.table(res.data.results)
       setMovies(res.data.results);
    }
   )

  }, [page])
  return <>
      <div className=' mb-8 text-center'>
      <div className='mt-8 mb-8 md:text-3xl font-bold text-2xl text-center'>Trending Movies</div>
      {
        movies.length == 0 ? 
        <div className='flex justify-center'>
        <Oval
        heigth="100"
        width="100"
        color='grey'
        secondaryColor='grey'
        ariaLabel='loading'
      />
      </div> :
     
      <div className='flex justify-center flex-wrap'>
        {
           movies.map((movie)=>(

          
      <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] md:h-[30vh]  md:w-[250px] h-[25vh] w-[150px]  bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative`}
        onMouseEnter={() => {
          setHover(movie.id)
        }}

        onMouseLeave={() => {
          setHover('')
        }}
      >
        {
           hover == movie.id &&
           <>{
             !favourites.find((m)=> m.id==movie.id)?
        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() =>add(movie)}>😍</div>:

        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() =>del(movie)}>❌</div>
           }
        </>
} 
        <div className='bg-gray-900 w-full text-white  text-center py-2 '>{movie.title}</div> </div>
        
           ))
          
    }
        

       </div>
       }
       
      </div>

      <Pagination page={page} goAhead={goAhead} goBack={goBack} />
     
  </>;
}

export default Movies;

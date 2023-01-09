import React, { useState ,useEffect } from 'react';

import axios from 'axios'
import Pagination from './Pagination';

function Banner() {

   const [movie , setMovie]= useState([])
 

  useEffect(function (){
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1`).then((res) => {
        
     
      
       console.table(res.data.results)
    
       setMovie(res.data.results[1]);
    }
   )

  },[])
  return (

     
    < >
    
       
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]  h-[30vh] md:h-[70vh] bg-cover bg-center flex items-end  ` }>
         
         <div className=' text-xl md:text-5xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex  justify-center'>
            {movie.title}
         </div>

         
        
     </div>

     
    
     </>
   
  )
  
}

export default Banner;

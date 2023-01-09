import React,{useState} from 'react'

function Pagination({page,goBack,goAhead}) {

  
  return (
    <>
       <div className='  w-full mb-3.5 flex justify-center'>
           <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl'onClick={goBack}>Previous</button>
           <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 bg-gray-300'>{page}</button>
           <button className='p-2 border-2 border-indigo-500 text-indigo-500 rounded-r-xl' onClick={goAhead}>Next</button>


       </div>
    </>
  )
}

export default Pagination
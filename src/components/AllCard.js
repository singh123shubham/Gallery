import React from 'react'
import Card from "./Card"

const AllCard = () => {
  return (
    <>
   <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <h1 className=' text-lg  font-bold bg-lime-500 w-40 rounded-lg flex justify-center'>
        Feature
      </h1>
    </div>

    <div className='flex flex-wrap gap-2 justify-center border-4 border-lime-500 rounded-lg bg-black p-10 m-20'>
       <Card/>  
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
    </div >
    </>
  )
}

export default AllCard
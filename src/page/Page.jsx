import React from 'react'
import Card from '../Card/Card'
import { Data } from '../utils/Data/Data'
import DetailPage from '../DetailPage/DetailPage'

export default function Page() {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-2 gap-2 my-4 flex-wrap'>
        {Data.map((item ,index)=>(
           <Card key={index} data={item}/>
        ))}
        
    </div>
  )
}


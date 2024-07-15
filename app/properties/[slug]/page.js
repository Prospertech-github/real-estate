import React from 'react'
import { data } from '@/public/data'

export default function page({params}) {
    const property = data.find(house => house.name === params.slug.split('%20').join(' '))
  return (
    <div> 
        This is the {property.name} page
        <p> {property.price}</p>
    </div>
  )
}

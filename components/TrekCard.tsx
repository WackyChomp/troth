import React from 'react'
import { Link, useLocation } from 'react-router'

const TrekCard = ({ id, name, imageUrls, location, itinerary, tags, estimatedPrice } : TrekCardProps) => {
  const path = useLocation();

  return (
    <Link to={path.pathname == '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/treks/${id}`} className='trek_card'>
      <img src={imageUrls} alt="" />

      <article className='bg-red-900'>
        <h2>{name}</h2>
        <figure>
          <img src="" alt="location" className='size-5' />
          <figcaption>{location}</figcaption>
        </figure>
      </article>

      <div className="mt-5 pl-[20px] pr-4 pb-6">
        {tags.map((tag, index) => (
          <div key={index} className="bg-amber-300 flex">{tag}</div>
        ))}
      </div>

      <article className='trekCard_pill'>
        {estimatedPrice}
      </article>
    </Link>
  )
}

export default TrekCard
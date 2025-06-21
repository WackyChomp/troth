import React from 'react'
import { Link, useLocation } from 'react-router'

const TrekCard = ({ id, name, imageUrls, itinerary, tags, estimatedPrice } : TrekCardProps) => {
  const path = useLocation();

  return (
    <Link to={path.pathname == '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/treks/${id}`}>
      <img src={imageUrls} alt="" />
    </Link>
  )
}

export default TrekCard
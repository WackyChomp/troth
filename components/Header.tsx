import React from 'react'
import { useLocation } from 'react-router'
import { cn } from '~/lib/utils'

interface Props{
  title: string,
  desc: string
}

const Header = ({ title, desc } : Props) => {
  const location = useLocation()

  return (
    <header className='header'>
      <article>
        <h1 className={cn('text-blue-800', location.pathname === '/' ? 'text-2xl md:text-4xl font-bold' : 'text-xl md:text-2xl font-semibold')}>{title}</h1>
        <p className={cn('text-green-700 font-normal', location.pathname === '/' ? 'text-base md:text-lg' : 'text-sm md:text-lg')}>{desc}</p>
        <p>{desc}</p>
      </article>
    </header>
  )
}

export default Header
import React from 'react'

interface Props{
  title: string,
  desc: string
}

const Header = ({ title, desc } : Props) => {
  return (
    <header className='header'>
      <article>
        <h1>{title}</h1>
        <p>{desc}</p>
      </article>
    </header>
  )
}

export default Header
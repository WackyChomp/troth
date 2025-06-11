import React from 'react';
import { Link, NavLink } from 'react-router';
import { sidebarItems } from '../app/constants/index';
import { cn } from '~/lib/utils';

const NavItems = () => {
  const logoutIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxvZy1vdXQtaWNvbiBsdWNpZGUtbG9nLW91dCI+PHBhdGggZD0ibTE2IDE3IDUtNS01LTUiLz48cGF0aCBkPSJNMjEgMTJIOSIvPjxwYXRoIGQ9Ik05IDIxSDVhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoNCIvPjwvc3ZnPg==`

  const exampleUser ={
    name: 'George',
    email: 'foundingfather1@gmail.com',
    imgUrl: `https://cdn.britannica.com/43/173043-050-957816CE/oil-George-Washington-canvas-Gilbert-Stuart-Washington.jpg?w=400&h=300&c=crop`
  }

  const arrow_right_icon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0LWljb24gbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4=`
  return (
    <section className='nav_items'>
      <Link to='/' className='link_logo'>
        <img src={arrow_right_icon} alt="" className='size-[30px]'/>
        <h1>TROTH</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {( { isActive } : { isActive: boolean } ) => (
                <div className={cn('group nav_item', {'bg-red-500 !text-white': isActive})}>
                  <img src={icon} alt={label}  className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : `text-yellow-800`}`}/>
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className='nav_footer'>
          <img src={exampleUser?.imgUrl || ''} alt={exampleUser?.name || 'David'} referrerPolicy="no-referrer" />
          <article>
            <h2>{exampleUser?.name}</h2>
            <p>{exampleUser?.email}</p>
          </article>
        
          <button onClick={() => {console.log('logout')}} className='cursor-pointer'>
            <img src={logoutIcon} alt="logout" className='size-6' />
          </button>
        </footer>
        
      </div>
    </section>
  )
}

export default NavItems
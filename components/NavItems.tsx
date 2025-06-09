import React from 'react';
import { Link, NavLink } from 'react-router';
import { sidebarItems } from '../app/constants/index';

const NavItems = () => {
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
                <div className="bg-red-800">
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default NavItems
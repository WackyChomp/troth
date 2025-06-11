// @ts-nocheck

import React from 'react'
import type { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import { Link } from 'react-router'

const MobileSidebar = () => {

  const farmIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZhcm0taWNvbiBsdWNpZGUtZmFybSI+PHBhdGggZD0iTTggMTRWNC41YTIuNSAyLjUgMCAwIDAtNSAwVjE0Ii8+PHBhdGggZD0ibTggOCA2LTUgOCA2Ii8+PHBhdGggZD0iTTIwIDR2MTAiLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4PSIxMiIgeT0iMTAiLz48cGF0aCBkPSJNMiAxNGgyMCIvPjxwYXRoIGQ9Im0yIDIyIDUtOCIvPjxwYXRoIGQ9Im03IDIyIDUtOCIvPjxwYXRoIGQ9Ik0yMiAyMkgxMmw1LTgiLz48cGF0aCBkPSJNMTUgMThoNyIvPjwvc3ZnPg==`
  const menuIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUtaWNvbiBsdWNpZGUtbWVudSI+PHBhdGggZD0iTTQgMTJoMTYiLz48cGF0aCBkPSJNNCAxOGgxNiIvPjxwYXRoIGQ9Ik00IDZoMTYiLz48L3N2Zz4=`;

  let sidebar: SidebarComponent;

  return (
    <div className='mobile_sidebar wrapper'>
      <header>
        <Link to='/'>
          <img src={farmIcon} alt="logo" className='size-[30px]'/>
          <h1>TROTH</h1>
        </Link>

        <button onClick={() => sidebar.toggle()}>
          <img src={menuIcon} alt="menu" className='size-7' />
        </button>
      </header>

      <SidebarComponent 
        width={270} 
        ref={Sidebar = sidebar}
        created={() => sidebar.hide()} 
        closeOnDocumentClickt={true} 
        showBackdrop={true} type='over'
      >
        <NavItems />
      </SidebarComponent>
    </div>
  )
}

export default MobileSidebar
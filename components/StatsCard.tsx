import React from 'react'
import { calculateTrendPercentage } from '~/lib/utils'

const StatsCard = ({ headerTitle, total, lastMonthCount, currentMonthCount} : StatsCard) => {
  const arrow_up = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwLWljb24gbHVjaWRlLWFycm93LXVwIj48cGF0aCBkPSJtNSAxMiA3LTcgNyA3Ii8+PHBhdGggZD0iTTEyIDE5VjUiLz48L3N2Zz4=`
  const arrown_down = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWRvd24taWNvbiBsdWNpZGUtYXJyb3ctZG93biI+PHBhdGggZD0iTTEyIDV2MTQiLz48cGF0aCBkPSJtMTkgMTItNyA3LTctNyIvPjwvc3ZnPg==`

  const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount)
  const isDecrement = trend === 'decrement';

  return (
    <article>
      <h3 className='text-base font-medium'>{headerTitle}</h3>

      <div>
        <div className="flex flex-col gap-4">

          <div className="text-4xl font-semibold">
            {total}
          </div>

          <div className="flex items-center gap-4">
            <figure className='flex items-center gap-2'>
              <img src={isDecrement ? arrown_down : arrow_up} alt="" />
            </figure>
          </div>

        </div>
      </div>
      
    </article>
  )
}

export default StatsCard
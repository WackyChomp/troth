import React from 'react'
import { calculateTrendPercentage } from '~/lib/utils'
import { cn } from '~/lib/utils'

const StatsCard = ({ headerTitle, total, lastMonthCount, currentMonthCount} : StatsCard) => {
  const arrow_up = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwLWljb24gbHVjaWRlLWFycm93LXVwIj48cGF0aCBkPSJtNSAxMiA3LTcgNyA3Ii8+PHBhdGggZD0iTTEyIDE5VjUiLz48L3N2Zz4=`
  const arrown_down = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWRvd24taWNvbiBsdWNpZGUtYXJyb3ctZG93biI+PHBhdGggZD0iTTEyIDV2MTQiLz48cGF0aCBkPSJtMTkgMTItNyA3LTctNyIvPjwvc3ZnPg==`

  const trend_up = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwLWljb24gbHVjaWRlLXRyZW5kaW5nLXVwIj48cGF0aCBkPSJNMTYgN2g2djYiLz48cGF0aCBkPSJtMjIgNy04LjUgOC41LTUtNUwyIDE3Ii8+PC9zdmc+`
  const trend_down = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24taWNvbiBsdWNpZGUtdHJlbmRpbmctZG93biI+PHBhdGggZD0iTTE2IDE3aDZ2LTYiLz48cGF0aCBkPSJtMjIgMTctOC41LTguNS01IDVMMiA3Ii8+PC9zdmc+`

  const { trend, percentage } = calculateTrendPercentage(currentMonthCount, lastMonthCount)
  const isDecrement = trend === 'decrement';

  return (
    <article className='bg-blue-900'>
      <h3 className='text-base font-medium'>{headerTitle}</h3>

      <div>
        <div className="flex flex-col gap-4">

          <div className="text-4xl font-semibold">
            {total}
          </div>

          <div className="flex items-center gap-4">
            <figure className='flex items-center gap-2'>
              <img src={isDecrement ? arrown_down : arrow_up} alt="arrows" className='bg-orange-500 m-2 size-6' />
              <figcaption className={cn('bg-gray-950 rounded-2xl p-1 text-sm font-medium', isDecrement ? 'text-red-600' : 'text-green-600')}>
                {Math.round(percentage)}%
              </figcaption>
            </figure>
            <p className='bg-gray-950 text-gray-600 text-sm font-medium truncate'>
              compared to last month
            </p>
          </div>

        </div>

        <img src={isDecrement ? trend_down : trend_up} alt="trending-graphs" 
          className='xl:w-32 w-full h-full md:h-32 xl:h-full'
        />

      </div>
      
    </article>
  )
}

export default StatsCard
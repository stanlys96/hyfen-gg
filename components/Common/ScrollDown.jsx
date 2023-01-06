import React from 'react'

const ScrollDown = ({ className }) => {
  return (
    <div className={`flex items-center gap-x-3 ${className}`}>
      <div className='scroll-down' />
      <span className='text-xs text-gray'>Scroll Down</span>
    </div>
  )
}

export default ScrollDown
import React from 'react'

export const Image = ({numberImg}) => {
  return (
    <img className='rounded-xl w-[80%] h-[35%]' src={`https://picsum.photos/id/${numberImg}/200/300`} alt="" />
  )
}

